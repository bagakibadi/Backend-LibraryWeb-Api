const categoryModels = require('../models/category');
const helper = require('../helpers/helpers');

module.exports = {
    getCategory: (req,res) => {
        categoryModels.getCategory()
            .then((result) => {
                helper.response(res, result, 200);
            })
            .catch(err => console.log(err))
    },
    categoryDetail: (req, res) => {
        const idCategory = req.params.id_category
        categoryModels.categoryDetail(idCategory)
            .then((result) => {
                helper.response(res, result, 200);
            })
            .catch(err => console.log(err))
    },
    insertCategory: (req, res) => {
        const {category} = req.body
        const data = {
            category
        }
        categoryModels.insertCategory(data)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err))
    },
    updateCategory: (req, res) => {
        const idCategory = req.params.id_category;
        const {category} = req.body
        const data = {
            category
        }
        categoryModels.updateCategory(idCategory, data)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err))
    },
    deleteCategory: (req, res) => {
        const idCategory = req.params.id_category;
        categoryModels.deleteCategory(idCategory)
            .then((result) => {
                res.send(result);
            })
            .catch(err => console.log(err))
    }
}