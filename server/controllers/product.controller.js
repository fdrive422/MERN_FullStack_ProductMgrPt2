const Product = require("../models/product.model.js");

module.exports = {
    getAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) => res.json(allProducts))
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res) => {
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => console.log(err));
    },

    createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => console.log(err));
    },

    // created controller to clear test data entries via postman
    deleteProduct: (req, res) => {
        Product.deleteOne({ _id: req.params.id })
            .then((deleteConfirmation) => res.json(deleteConfirmation))
            .catch((err) => res.json(err));
    },

};