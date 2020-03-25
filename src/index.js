const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json()); // avisa o express que estaremos usando json
app.use(routes);

app.listen(3333);