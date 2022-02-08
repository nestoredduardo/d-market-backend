const getEndpoints = () => {
  return {
    products: 'https://bmarket-api.herokuapp.com/products',
    categories: 'https://bmarket-api.herokuapp.com/categories',
    search: 'https://bmarket-api.herokuapp.com/search',
  };
};

module.exports = {
  getEndpoints,
};
