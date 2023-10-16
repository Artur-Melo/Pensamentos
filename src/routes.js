const express = require('express');
const UserController = require('./controllers/UserController');
const pensamentosController = require('./controllers/pensamentosController')

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users', UserController.findUsers);
router.get('/users/:id', UserController.findUser);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.deleteUser);

router.post("/thoughts", pensamentosController.createThought);
router.get('/thoughts', pensamentosController.findThoughts);
router.get('/thoughts/:id', pensamentosController.findThought);
router.put('/thoughts/:id', pensamentosController.update);
router.delete('/thoughts/:id', pensamentosController.deleteThought);


module.exports = router;
