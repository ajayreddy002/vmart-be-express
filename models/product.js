const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: '',
    category: '',
    images: [String],
    subCategory: '',
    price: '',
    size: '',
    color: '',
    availableColors: [''],
    quantity: '',
    createdAt: "date"
},
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

const Product = mongoose.model('products', productSchema);

module.exports = {
    Product
}