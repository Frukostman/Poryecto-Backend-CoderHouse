const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, max: 100, require: true },
    description: { type: String,  max: 400 },
    price: { type: Number, require: true },
    timestamp: { type: Date, default: new Date() },
    stock: { type: Number },
    thumbnail: { type: String, max: 400 },
    code: { type: Number, min: 0, max: 100 }
});

const Product = mongoose.model('products', schema);

module.exports = Product;