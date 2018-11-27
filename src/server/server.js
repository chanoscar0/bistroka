const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const postController = require('./controllers/postController');


app.use(bodyParser.json());
// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname + '../../../index.html'));
// });
app.get('/appetizers', postController.getAppetizers, (req, res) => {
  res.json(res.locals.appetizers);
});

app.use(express.static(__dirname + '/../../dist'));

module.exports = app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
