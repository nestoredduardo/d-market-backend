const getEndpoints = () => {
  return {
    products: 'https://d-market-backend.herokuapp.com//products',
    categories: 'https://d-market-backend.herokuapp.com//categories',
    search: 'https://d-market-backend.herokuapp.com//search',
  };
};

module.exports = {
  getEndpoints,
};
