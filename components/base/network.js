const express = require('express');
const router = express.Router();

const controller = require('./controller');
const response = require('../../network/response');

router.get('/', (req, res) => {
  try {
    const result = controller.getEndpoints();
    response.success(req, res, result, 200);
  } catch (error) {
    response.error(req, res, 'Hubo un error', 500, error);
  }
});

module.exports = router;
