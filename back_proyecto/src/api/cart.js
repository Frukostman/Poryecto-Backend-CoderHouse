const Cart = require('../models/cart');

class CartController {

    constructor() {}

    async findAll() {
        return await Cart.find({});
    }
    async findById(id) {
        return await Cart.findById(id);
    }
    async findById(id) {
        return await Cart.findById(id);
    }
    async create(data) {
        return await Cart.create(data);
    }
    async update(id, data) {
        return await Cart.findByIdAndUpdate(id, data);
    }
    async delete(id) {
        return await Cart.findByIdAndDelete(id);
    }
}

module.exports = new CartController();