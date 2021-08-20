const axios = require('axios');
const coinController = {};

coinController.getListCoin = (req, res) => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=_price&per_page=250&page=1&sparkline=false')
  .then(datos => res.render('index.html', {datos: datos.data}))
  .catch(err => console.log(err))
}

coinController.getConverter = (req, res) => {
  res.render('convertidor.html', {data: "datos de precios para convertir "})
}

coinController.getContacto = (req, res) => {
  res.render('contacto.html', {data: "formulario de contacto"})
}

coinController.getInfoCoin = (req, res) => {
  axios.get('https://api.coingecko.com/api/v3/coins/'+req.params.id)
  .then(data => res.render('infocoin.html', {datos: data.data}))
  .catch(err => console.log(err))
}

module.exports = coinController;