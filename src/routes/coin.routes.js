const express = require('express');
const router = express.Router();
const {getListCoin, getConverter, getContacto, getInfoCoin} = require('../controllers/coinController');

router.route('/')
  .get(getListCoin)

router.route('/convertidor')
  .get(getConverter)

router.route('/contacto')
  .get(getContacto)

router.route('/infocoin/:id')
  .get(getInfoCoin)

module.exports = router;