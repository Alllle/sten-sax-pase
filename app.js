const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

const routes = require('./app/routes');

app.use(routes);

app.listen(PORT,
    () => console.log(`http://localhost:${PORT}`))
