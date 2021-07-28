const { Router } = require('express');
const UserController = require('../controllers/UserController');
const ReviewController = require('../controllers/ReviewController');
const QuestionController = require('../controllers/QuestionController');
const PartyTypeController = require('../controllers/PartyTypeController');
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

module.exports = router;

