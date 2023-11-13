const { User } = require('../models');

const userData = [
  {
    "username": "Admin1",
    "password": "Password123!"
  },
  {
    "username": "User1",
    "password": "Password123!"
  },
  {
    "username": "User2",
    "password": "Password123!"
  },
  {
    "username": "User3",
    "password": "Password123!"
  },
  {
    "username": "User4",
    "password": "Password123!"
  }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;