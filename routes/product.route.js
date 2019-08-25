const express = require('express');

const ProductController = require('../controllers/product.controller');

var routes = express.Router()
routes.post('/products', ProductController.create)
      .get('/products/:id', ProductController.get)
      .get('/products/', ProductController.list)
      .put('/products/:id', ProductController.update)
      .delete('/products/:id', ProductController.remove);

module.exports = routes
