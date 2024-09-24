import jwt from 'jsonwebtoken'
import { genPassword } from '@/utils'
import { JWT_SECRET } from '@/settings'
import { prismaClient } from '@/lib/prismaClient'

async function captcha(ctx, next) {
  const svgCaptcha = await import('svg-captcha')
  // console.log(svgCaptcha.default)
  const captcha = svgCaptcha.default.create({
    size: 4,
    width: 150,
    height: 50,
    fontSize: 50,
    ignoreChars: '01oOiIl',
    noise: 2,
    color: true,
    background: '#aaa',
  })

  // console.log(captcha.text)

  ctx.session.captcha = captcha.text.toLowerCase()
  ctx.response.type = 'image/svg+xml'
  ctx.body = captcha.data
  // ctx.body = 'ok'
  await next()
}

async function login(ctx, next) {
  const { username, password, captcha } = ctx.request.body

  if (captcha.toLowerCase() !== ctx.session.captcha) {
    ctx.status = 400
    ctx.body = {
      message: 'Invalid captcha',
    }
    return
  }

  try {
    const user = await prismaClient.user.findUnique({
      where: {
        userName: username,
      },
      select: {
        id: true,
        userName: true,
        password: true,
        email: true,
      },
    })

    if (!user) {
      ctx.status = 401
      ctx.body = {
        message: 'Invalid username',
      }
      return
    }

    if (user.password !== genPassword(password)) {
      ctx.status = 401
      ctx.body = {
        message: 'Invalid password',
      }
      return
    }

    const token = jwt.sign(
      {
        id: user.id,
        userName: user.userName,
        email: user.email,
      },
      JWT_SECRET,
      {
        expiresIn: '7d',
      },
    )

    ctx.body = {
      code: 200,
      message: 'login success',
      data: {
        accessToken: token,
      },
    }
  }
  catch (e) {
    console.log(e)

    ctx.status = 500
    ctx.body = {
      message: 'Internal server error',
    }
  }

  await next()
}

export async function getPermissionsTree(ctx, next) {
  ctx.status = 200
  ctx.body = {
    code: 200,
    message: 'bing bong.',
  }
  await next()
}

export default {
  'get /auth/captcha': captcha,
  'post /auth/login': login,
  'get /auth/permissions/tree': getPermissionsTree,
}
