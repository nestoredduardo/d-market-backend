const db = require('../../db');

const getCategories = async () => {
  const categories = await db.query('SELECT * FROM category');

  return {
    categories,
  };
};

module.exports = {
  getCategories,
};
