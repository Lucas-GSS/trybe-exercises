const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();
  if(!products) return res.status(404).json({ message: 'nenhum produto encontrado' })
  return res.status(200).json({products});
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Produto não encontrado' }) 
  res.status(200).json({ product });
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  if (!name || !brand) return res.staus(400).json({ message: 'Nome e marca do produto são obrigatórios' })
  const newProduct = await ProductModel.add(name, brand);
  if (!newProduct) return res.status(500).json({ message: 'Erro ao adicionar o produto' })
  res.status(201).json({message: `Produto criado com sucesso: ${newProduct}`});
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);
  if (!products) res.status(404).json({ message: 'Não foi possível excluir pois não foi encontrado' })
  res.status(200).json({message: `Produto excluído: ${products}` });
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const products = await ProductModel.update(req.params.id, name, brand);
  if (!products) return res.status(404).json({ message: 'Não foi possível atualizar pois não foi encontrado' })
  res.status(200).json({message: `Atualizado: ${products}`});
});

module.exports = router;