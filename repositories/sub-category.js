const { connect } = require("../config/db.config");
const { SubCategories } = require("../models/catogories");

class SubCategoryRepository {
    constructor() {
        connect();
    }
    async createSubCategory(req, res) {
        try {
            const params = req.body;
            if (params.name && params.description && params.category) {
                const response = await SubCategories.create(params);
                if (response) {
                    res.status(200).send({ message: 'Sub category addedd successfully' });
                }
            } else {
                res.status(400).send({ message: 'Required params are missing' });
            }
        } catch (err) {
            res.status(500).send({ message: 'Something went wrong' });
        }
    }

    async getSubCategories(req, res) {
        try {
            const categories = await SubCategories.find({});
            res.send(categories);
        } catch (e) {
            res.status(500).send({ message: e });
        }
    }
}
module.exports = new SubCategoryRepository();