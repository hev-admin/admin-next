import { exit } from 'node:process'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({
    data: {
      username: 'admin',
      email: 'admin@hev.com',
      password: 'd4c7b501d64b1c48217ed8603c554ebd:d6f88573ca326c6f6c664b590c87916f99d6370ad33d4466bb8c01537b3c032c899a6fefa10105ff884bc7674d94ff11b2dc8b31aaae8a8e82610e3fba75f7dd',
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
