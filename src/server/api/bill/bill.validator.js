const Yup = require('yup');

module.exports = {
  create: Yup.object({
    cardNumber: Yup.string().matches(/^\d+$/).min(16).max(16).required(),
    expDate: Yup.string().matches(/^\d{2}\/\d{4}$/).required(),
    cvv: Yup.string().matches(/^\d+$/).min(3).max(3).required(),
    amount: Yup.number().required()
  })
};
