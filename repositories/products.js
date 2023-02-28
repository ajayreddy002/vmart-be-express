const { connect } = require("../config/db.config");
const { Product } = require("../models/product");

class ProductRepository {
    constructor() {
        connect();
    }
    async createProduct(req, res) {
        try {
            const params = req.body
            if (params.name && params.quantity && params.price) {
                const response = await Product.create(req.body);
                res.status(200).send({ message: 'Product added successfully' })
            } else {
                res.status(400).send({ message: 'Required params are missing' })
            }
        } catch (error) {

        }
    }
    async getProducts(req, res) {
        try {
            const products = await Product.find({});
            res.send(products);
        } catch (e) {
            res.status(500).send({ message: e });
        }
    }
    async getProductById(req, res) {
        try {
            const products = await Product.findById(req.params.id );
            res.send(products);
        } catch (e) {
            res.status(500).send({ message: e });
        }
    }
    async updateProduct(req, res) {
        try {
            if (req.params.id) {
                const filter = { _id: req.params.id };
                const params = req.body;
                const updatedRes = await Product.findOneAndUpdate(filter, params, {
                    new: true
                });
                console.log(updatedRes._id)
                if (updatedRes._id) {
                    res.status(200).send({ message: 'Product updated successfully' });
                } else {
                    res.status(400).send({ message: 'Failed to update' });
                }
            } else {
                res.status(400).send({ message: 'Required params are missing' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: error });
        }
    }
    async filterProductsByCategory(req, res) {
        try {
            if (req.params.category) {
                const products = await Product.find({ category: req.params.category });
                res.send(products);
            } else {
                res.status(400).send({ message: 'Required params are missing' })
            }
        } catch (error) {
            res.status(500).send({ message: error });
        }
    }
    async filterProductsBySubCategory(req, res) {
        try {
            if (req.params.subCategory) {
                const products = await Product.find({ subCategory: req.params.subCategory });
                res.send(products);
            } else {
                res.status(400).send({ message: 'Required params are missing' })
            }
        } catch (error) {
            res.status(500).send({ message: error });
        }
    }
}
module.exports = new ProductRepository();