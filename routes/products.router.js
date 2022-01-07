const express = require('express');
const ProductsService = require('./../services/product.services');

const router = express.Router();
const service = new ProductsService;

router.get('/', async (req, res) =>{
  const products = await service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.findOne(id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const body = req.body;
  //TODO validate body
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body);
    res.json({
      message: 'updated',
      data: product
    });
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await service.update(id, body);
  res.json({
    message: 'updated',
    data: product
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  //TODO validate is an item
  const response = await service.delete(id);
  res.status(200).json(response);
});

module.exports = router;