const express = require('express')
const router = express.Router()

const pizzasController = require('../controllers/pizzasController.js')
const pizzas = require('../middlewares/pizzas.js')

router.get('/pizzas', pizzas, pizzasController.pizzas)

module.exports = router
