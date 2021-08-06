const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ReviewController = require('../controllers/ReviewController');
const PartyTypeController = require('../controllers/PartyTypeController');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SaleController');
const ShopListController = require('../controllers/ShopListController');
const AuthController = require('../controllers/AuthController');
const path = require('path');
const multer = require('multer');
const validator = require("../config/validator");
const adminMiddleware = require("../middlewares/admin");
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



router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.get('/listShop/:id', UserController.listedShop);
router.get('/listPostedProducts/:id', UserController.listPostedProducts);
router.get('/listReviews/:id', UserController.listMadeReviews);
router.get('/listFavorites/:id', UserController.listFavorited);

router.put('/users/:id', UserController.update);
router.put('/disfavorProduct/:id', UserController.disfavor);
router.put('/unputShopList/id', UserController.unputOn); 
router.put('/updateQuantify', UserController.updateQtdProduct); 

router.post('/userValidator', validator.validationUser('create'), UserController.create);
router.post('/users',UserController.create);
router.post('/putShopList/:id', UserController.putOn);
router.post('/favoriteProduct/:id', UserController.favorite);
router.post('/postProduct/:id', UserController.postProduct );
router.post('/makeReviews/:id', UserController.makeReview);
router.post('/users/photo/:id', upload.single('photo'), UserController.addPhotoUser);

router.delete('/unmakeReviews/:id', UserController.unmakeReview); 
router.delete('/unpostProduct/:id', UserController.unpostProduct); 
router.delete('/users/:id', UserController.destroy);
router.delete('/photo/:id', UserController.removePhoto);


router.get('/reviews',ReviewController.index);
router.get('/reviews/:id',ReviewController.show);
router.post('/reviews',ReviewController.create);
router.put('/reviews/:id', ReviewController.update);
router.get('/reviews/:id', adminMiddleware, ReviewController.destroy); 
router.delete('/reviews/:id', ReviewController.destroy)


router.get('/partyTypes',PartyTypeController.index);
router.get('/partyTypes/:id',PartyTypeController.show);
router.post('/partyTypes',PartyTypeController.create);
router.put('/partyTypes/:id', PartyTypeController.update);
router.delete('/partyTypes/:id', PartyTypeController.destroy)

//const allUploads = upload.fields([{ name: 'photo', maxCount: 5 }]);

router.get('/private/getDetails', AuthController.getDetails);
router.post('/login', AuthController.login);
router.post('/forgot_password', AuthController.forgot_password);
router.post('/reset_password', AuthController.reset_password);


router.get('/products',ProductController.index);
router.get('/products/:id',ProductController.show);
router.get('/productsDestroy/:id', adminMiddleware, ProductController.destroy); 
router.get('/products/:typeId',ProductController.findByType);
router.get('/products/photo/:id',ProductController.getPhotoProduct);
router.get('/products/user/:id',ProductController.getProductPoster);
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