const db = require('../../db');

const getResults = async (input) => {
  let filtered = [];
  const productList = await db.query(`SELECT * FROM product`);

  productList.forEach((item) => {
    if (
      item.name.toLowerCase().charAt(0) === input.toLowerCase().charAt(0) &&
      item.name.localeCompare(input) !== -1
    ) {
      filtered.push(item);
    }
  });

  return {
    products: filtered,
  };
};

module.exports = {
  getResults,
};
