const { body, validationResult } = require('express-validator')

const userValidationRules = () => {
  return [
    // username must be an email
    //body('username').isEmail().withMessage('Debe ingresar un email valido'),
    // password must be at least 5 chars long
    //body('password').not().isEmpty().isLength({ min: 5 }).withMessage('Password invalido'),
    //body('semana').optional().not().isIn(['Sunday', 'Saturday']),

    body('id').not().isEmpty().isNumeric().withMessage('Error en el id')
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  userValidationRules,
  validate,
}