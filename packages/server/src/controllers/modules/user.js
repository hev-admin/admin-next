import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@/settings'
import { prismaClient } from '@/lib/prismaClient'

async function getUserInfo(ctx, next) {
  const token = ctx.headers.authorization.split(' ')[1]

  if (token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET)
      ctx.userInfo = decoded
      // console.log(decoded)
      const user = await prismaClient.user.findUnique({
        where: {
          id: decoded.id,
        },
        select: {
          id: true,
          userName: true,
          email: true,
          nickName: true,
          realName: true,
        },
      })
      console.log(user)
      ctx.status = 200
      ctx.body = {
        code: 200,
        data: user,
        message: 'success',
      }

      await next()
    }
    catch (e) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        message: e,
      }
    }
  }
  else {
    ctx.status = 401
    ctx.body = {
      code: 401,
      message: 'Token is required',
    }
  }
}

export default {
  'get /user/info': getUserInfo,
}
