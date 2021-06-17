const express = require('express');
const router = express.Router();
const {getListCoin, getConverter, getContacto} = require('../controllers/coinController');

router.route('/coin')
  .get(getListCoin)

router.route('/convertidor')
  .get(getConverter)

router.route('/contacto')
  .get(getContacto)

module.exports = router;