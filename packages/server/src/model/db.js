import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('hev_test', 'root', '319520', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  logging: false,
})
