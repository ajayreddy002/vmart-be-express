const { connect } = require("../config/db.config");
const { Categories } = require("../models/catogories");

class CategoryRepository {
    constructor() {
        connect();
    }
    async createCategory(req, res) {
        try {
            const params = req.body;
            if (params.name && params.description) {
                const response = await Categories.create(params);
                if (response) {
                    res.status(200).send({ message: 'Category addedd successfully' });
                }
            } else {
                res.status(400).send({ message: 'Required params are missing' });
            }
        } catch (err) {
            res.status(500).send({ message: 'Something went wrong' });
        }
    }

    async getCategories(req, res) {
        try {
            const categories = await Categories.find({});
            res.send(categories);
        } catch (e) {
            res.status(500).send({ message: e });
        }
    }
}
module.exports = new CategoryRepository();