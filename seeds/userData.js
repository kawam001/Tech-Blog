const { User } = require('../models');

const userData = [
  {
    "username": "Admin1",
    "password": "Apsw1!"
  },
  {
    "username": "Admin2",
    "password": "Apsw2!"
  },
  {
    "username": "User1",
    "password": "Upsw1!"
  },
  {
    "username": "User2",
    "password": "Upsw2!"
  },
  {
    "username": "User3",
    "password": "Upsw3!"
  }
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;