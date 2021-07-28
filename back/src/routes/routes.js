const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ReviewController = require('../controllers/ReviewController');
const QuestionController = require('../controllers/QuestionController');
const PartyTypeController = require('../controllers/PartyTypeController');
const ProductController = require('../controllers/ProductController');
const CategoryController = require('../controllers/CategoryController');
const SaleController = require('../controllers/SaleController');
const ShopListController = require('../controllers/ShopListController');
const router = Router();

router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy)

router.get('/reviews',ReviewController.index);
router.get('/reviews/:id',ReviewController.show);
router.post('/reviews',ReviewController.create);
router.put('/reviews/:id', ReviewController.update);
router.delete('/reviews/:id', ReviewController.destroy)

router.get('/questions',QuestionController.index);
router.get('/questions/:id',QuestionController.show);
router.post('/questions',QuestionController.create);
router.put('/questions/:id', QuestionController.update);
router.delete('/questions/:id', QuestionController.destroy)

router.get('/partyTypes',PartyTypeController.index);
router.get('/partyTypes/:id',PartyTypeController.show);
router.post('/partyTypes',PartyTypeController.create);
router.put('/partyTypes/:id', PartyTypeController.update);
router.delete('/partyTypes/:id', PartyTypeController.destroy)

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