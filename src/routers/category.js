const express = require('express');
const Router = express.Router();
const categoryController = require('../controller/category');

Router
    .get('/', categoryController.getCategory)
    .get('/:id_category', categoryController.categoryDetail)
    .post('/', categoryController.insertCategory)
    .patch('/:id_category', categoryController.updateCategory)
    .delete('/:id_category', categoryController.deleteCategory)

module.exports = Router;