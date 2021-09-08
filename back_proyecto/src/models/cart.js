const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    cantidad: { type: Number, require: true },
    code:  { type: Number },
    description: { type: String,  max: 400 },
    name: { type: String, max: 100, require: true },
    price: { type: Number, require: true },
    stock: { type: Number },
    thumbnail: { type: String, max: 400 },
    timestamp: { type: String, max: 400 }
    }); 

const schema = new mongoose.Schema({

    products: [productsSchema],
    timestamp: { type: Date, default: new Date() }
});

const Cart = mongoose.model('cart', schema);

module.exports = Cart;
