const Product = require('../models/product');

class ProductController {

    constructor() {}

    async findAll() {
        return await Product.find({});
    }

    async findById(id) {
        return await Product.findById(id);
    }

    async findById(id) {
        return await Product.findById(id);
    }

    async create(data) {
        return await Product.create(data);
    }

    async update(id, data) {
        return await Product.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return await Product.findByIdAndDelete(id);
    }
    

}

module.exports = new ProductController();