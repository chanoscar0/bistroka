const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const productController = require('./controllers/productController');



app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '../../../index.html'));
// });
app.get('/appetizers', productController.getAppetizers, (req, res) => {
  res.json(res.locals.info);
});
app.get('/tempura', productController.getTempura, (req, res) => {
  res.json(res.locals.info);
});
app.get('/yakitori', productController.getYakitori, (req, res) => {
  res.json(res.locals.info);
});
app.get('/makimono', productController.getMakimono, (req, res) => {
  res.json(res.locals.info);
});

app.use(express.static(__dirname + '/../../dist'));

module.exports = app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
