require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    database: process.env.DB_NAME,
  },
  listPerPage: process.env.LIST_PER_PAGE || 10,
};

module.exports = config;
