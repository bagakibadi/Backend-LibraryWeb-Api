const express = require('express');
const Router = express.Router();
const controllerLoan = require('../controller/loan');

Router
    .get('/', controllerLoan.getLoan)
    .get('/:id_loan', controllerLoan.loanDetail)
    .post('/', controllerLoan.insertLoan)
    .patch('/:id_loan', controllerLoan.updateLoan)
    .delete('/:id_loan', controllerLoan.deleteLoan)

module.exports = Router;