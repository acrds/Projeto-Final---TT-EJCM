const { Router } = require('express');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SaleController');
const ShopListController = require('../controllers/ShopListController');
const AuthController = require('../controllers/AuthController');
const path = require('path');
const multer = require('multer');
const storage = require("../config/files");
const passport = require("passport");
const router = Router();

router.use("/private", passport.authenticate('jwt', {session: false}));

const upload = multer({ storage: storage,
	fileFilter: function (req, file, cb) {
	        const ext = path.extname(file.originalname);
	        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
	            return cb(new Error('Erro extensão não suportada!'), false);
	        }
	        cb(null, true);
	    },
	    limits:{
	        fileSize: 2048 * 2048
	    }

 });

//const allUploads = upload.fields([{ name: 'photo', maxCount: 5 }]);

router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);


router.get('/products',ProductController.index);
router.get('/products/:id',ProductController.show);
router.get('/products/:typeId',ProductController.findByType);
router.post('/products',ProductController.create);
router.post('/products/photo/:id', upload.single('photo'),ProductController.addPhotoProduct);
router.put('/products/:id', ProductController.update);
router.put('/products/addPartyType/:id', ProductController.addRelationPartyType);
router.put('/products/removePartyType/:id', ProductController.removeRelationPartyType);
router.delete('/products/:id', ProductController.destroy);
router.delete('/products/photo/:id', ProductController.removePhoto);

router.get('/sales',SaleController.index);
router.get('/sales/:id',SaleController.show);
router.post('/sales',SaleController.create);
router.put('/sales/:id', SaleController.update);
router.delete('/sales/:id', SaleController.destroy)

router.get('/shopLists',ShopListController.index);
router.get('/shopLists/:id',ShopListController.show);
router.post('/shopLists',ShopListController.create);
router.put('/shopLists/:id', ShopListController.update);
router.put('/shopLists/addSale/:id', ShopListController.concludeSale);
router.delete('/shopLists/:id', ShopListController.destroy)

module.exports = router;