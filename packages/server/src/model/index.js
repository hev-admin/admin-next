import { randomUUID as UUID } from 'node:crypto'
import { DataTypes } from 'sequelize'
import { sequelize } from './db.js'

const { STRING } = DataTypes

export const User = sequelize.define('User', {
  id: {
    primaryKey: true,
    type: STRING,
    defaultValue: UUID(),
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  nickname: {
    type: STRING,
    allowNull: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  email: {
    unique: true,
    type: STRING,
    allowNull: false,
  },
}, {
  tableName: 'users',
})

export const Profile = sequelize.define('Profile', {
  id: {
    primaryKey: true,
    type: STRING,
    defaultValue: UUID(),
  },
  uid: {
    type: STRING,
  },
  bio: {
    type: STRING,
    allowNull: true,
  },
}, {
  tableName: 'profiles',
})
