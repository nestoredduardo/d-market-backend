const db = require('../../db');
const utils = require('../../utils');
const config = require('../../config');

const getProducts = async (page = 1, category = 1) => {
  const offset = utils.getOffset(page, config.listPerPage);

  let n_items = await db.query(
    `SELECT COUNT(id) FROM product WHERE category = ?`,
    [category]
  );
  n_items = n_items[0]['COUNT(id)'];

  const rows = await db.query(
    `SELECT * FROM product WHERE category = ? LIMIT ?,? `,
    [category, offset, config.listPerPage]
  );

  const data = rows;
  const meta = { page, npages: Math.ceil(n_items / config.listPerPage) };

  return {
    data,
    meta,
  };
};

module.exports = {
  getProducts,
};
