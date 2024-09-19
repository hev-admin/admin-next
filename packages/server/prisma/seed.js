import { exit } from 'node:process'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      userName: 'admin',
      email: 'admin@hev.com',
      password: 'aaa196dbb3049441eee66ad6aa929671',
    },
  })

  console.log('created: ', user)
}

main()
  .catch((e) => {
    console.error(e)
    exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
