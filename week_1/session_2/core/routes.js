const express = require('express');

const router = express.Router()

const userController = require('./controllers/userController')

// User API
router.post('/register', userController.post)

router.get('/users', userController.getAll)

router.get('/user/:id', userController.get)

router.patch('/user/:id', userController.update)

router.delete('/user/:id', userController.delete)

router.post('/login', userController.login)

module.exports = router;