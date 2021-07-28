const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const CategoryController = require('../controllers/CategoryController');
const SaleController = require('../controllers/SaleController');
const ShopListController = require('../controllers/ShopListController');
const router = Router();

router.get('/products',ProductController.index);
router.get('/products/:id',ProductController.show);
router.post('/products',ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy)

router.get('/categories',CategoryController.index);
router.get('/categories/:id',CategoryController.show);
router.post('/categories',CategoryController.create);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.destroy)

router.get('/sales',SaleController.index);
router.get('/sales/:id',SaleController.show);
router.post('/sales',SaleController.create);
router.put('/sales/:id', SaleController.update);
router.delete('/sales/:id', SaleController.destroy)

router.get('/shopLists',ShopListController.index);
router.get('/shopLists/:id',ShopListController.show);
router.post('/shopLists',ShopListController.create);
router.put('/shopLists/:id', ShopListController.update);
router.delete('/shopLists/:id', ShopListController.destroy)

module.exports = router;