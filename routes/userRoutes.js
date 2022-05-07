const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');

router.post('/',userController.create);
router.post('/login', userController.login);
router.get('/:userid', userController.get);
router.put('/:userid', userController.update);
router.delete('/:userid', userController.Delete);
module.exports = router;