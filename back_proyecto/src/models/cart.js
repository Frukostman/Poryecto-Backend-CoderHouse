const mongoose = require('mongoose');
const product = require('./product')

const schema = new mongoose.Schema({
    products:  { type : Array , "default" : [product] },
    total: { type: Number, require: true },
    timestamp: { type: Date, default: new Date() },
});

const Cart = mongoose.model('cart', schema);

module.exports = Cart;


