const express = require('express');
const router = express.Router();
const controller = require('../api/products');

const adminVal = require ('../middleware/middlewareAdmin')

router.get('/products', async (req, res) => {
    try {
        let result = await controller.findAll();
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get('/products/:id', async (req, res) => {
    try {
        let result = await controller.findById(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.post('/products', adminVal,async (req, res) => {
    try {
        let result = await controller.create(req.body);
        console.log(result)
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.put('/products/:id', adminVal, async (req, res) => {
    try {
        let result = await controller.update(req.params.id, req.body);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete('/products/:id', adminVal, async (req, res) => {
    try {
        let result = await controller.delete(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;