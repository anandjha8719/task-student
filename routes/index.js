const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
console.log('router working');

router.get('/', homeController.home);
router.get('/sign-in', homeController.signin);
router.post('/create', homeController.create);
router.get('/delete', homeController.delete);

module.exports = router;