const express = require('express');
const Router = express.Router();
const userController = require('../controller/user');

Router
    .get('/', userController.userGet)
    .post('/', userController.register)
    .get('/auth', userController.authentication)
    .get('/:id_user', userController.userDetail)
    .post('/login', userController.login)
    .patch('/update/:id_user', userController.updateUser)
    .delete('/:id_user', userController.deleteUser)
module.exports = Router