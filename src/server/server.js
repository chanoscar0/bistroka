const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3434;
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.sendFile(path.join('../src/index.html'))
})

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})




