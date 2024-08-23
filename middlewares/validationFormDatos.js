const { body } = require('express-validator')

const validations = [
  body('name')
    .notEmpty().withMessage('Ingrese su nombre'),
  body('phone')
    .notEmpty().withMessage('Ingrese su teléfono')
    .isNumeric().withMessage('Ingrese un número de teléfono válido')
    .isLength({ min: 8, max: 10 }).withMessage('Ingrese un número de teléfono válido'),
  body('street')
    .notEmpty().withMessage('Ingrese la calle'),
  body('altura')
    .notEmpty().withMessage('Ingrese la altura')
    .isNumeric().withMessage('Ingrese una altura válida')
    .isFloat({ min: 0 }).withMessage('Ingrese una altura válida')
]

module.exports = validations
