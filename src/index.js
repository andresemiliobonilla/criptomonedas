const express = require('express');
const app = express();
const path = require('path');
const ruta = require('./routes/coin.routes');

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));

app.use(ruta);

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
  console.log('port', app.get('port'))
})
