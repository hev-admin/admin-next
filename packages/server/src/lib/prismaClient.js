import { PrismaClient } from '@prisma/client'

export const prismaClient = new PrismaClient()

export async function prismaClientConnect(ctx, next) {
  ctx.prisma = prismaClient
  await next()
}

export async function prismaClientDisconnect() {
  await prismaClient.$disconnect()
}
