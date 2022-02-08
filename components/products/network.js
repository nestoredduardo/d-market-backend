const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

router.get('/', async (req, res) => {
  try {
    const page = req.query.page;
    const category = req.query.category;
    const result = await controller.getProducts(page, category);
    response.success(req, res, result, 200);
  } catch (error) {
    response.error(req, res, 'Hubo un error', 500, error);
  }
});

module.exports = router;
