const express = require('express');
const router = express.Router();
const controller = require('../api/cart');

const adminVal = require ('../middleware/middlewareAdmin')

router.get('/cart', async (req, res) => {
    try {
        let result = await controller.findAll();
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.get('/cart/:id', async (req, res) => {
    try {
        let result = await controller.findById(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.post('/cart', adminVal,async (req, res) => {
    try {
        let result = await controller.create(req.body);
        
        return res.json(result);

    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
        
});

router.put('/cart/:id', adminVal, async (req, res) => {
    try {
        let result = await controller.update(req.params.id, req.body);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

router.delete('/cart/:id', adminVal, async (req, res) => {
    try {
        let result = await controller.delete(req.params.id);
        return res.json(result);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
});

module.exports = router;