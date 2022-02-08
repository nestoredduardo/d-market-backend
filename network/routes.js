const base = require('../components/base/network');
const products = require('../components/products/network');
const categories = require('../components/categories/network');
const search = require('../components/search/network');

const routes = (server) => {
  server.use('/products', products);
  server.use('/categories', categories);
  server.use('/search', search);
  server.use('/', base);
};

module.exports = routes;
