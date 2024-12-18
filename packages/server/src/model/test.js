import { User } from './orm.js'

async function findUser() {
  const user = await User.findOne({
    where: {
      name: 'Bob',
    },
  })

  console.log(user.dataValues)
}

await findUser()
