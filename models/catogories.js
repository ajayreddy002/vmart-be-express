const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: '',
    description: ''
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const subCategorySchema = new mongoose.Schema({
    name: '',
    category: [''],
    description: ''
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Categories = mongoose.model('categories', categorySchema);
const SubCategories = mongoose.model('sub_categories', subCategorySchema);

module.exports = {
    Categories,
    SubCategories
}