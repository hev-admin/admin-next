import { sequelize } from './db.js'
import { User } from './index.js'

export async function initDB() {
  await sequelize.authenticate()
  await sequelize.sync()

  const username = 'admin'
  const user = await User.findOne({
    where: {
      username,
    },
  })
  // 不存在则自动创建:
  if (user === null) {
    await User.create({
      username,
      email: 'admin@hev.com',
      password: 'd4c7b501d64b1c48217ed8603c554ebd:d6f88573ca326c6f6c664b590c87916f99d6370ad33d4466bb8c01537b3c032c899a6fefa10105ff884bc7674d94ff11b2dc8b31aaae8a8e82610e3fba75f7dd',
    })
  }
}

await initDB()
