const express = require('express');
const UserController = require('./controllers/UserController');

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.findUsers);
router.get('/users/:id', UserController.findUser);


module.exports = router;
