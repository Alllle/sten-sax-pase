const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json);

app.get('/test', (req, resp) => {
    console.log('request');
    resp.send({
        test: 'this is a test',
        with: 'several items'
    })
})

app.get('/test/:name', (req, res) => {
    const { id } = req.params;
    const { test } = req.body;
})

app.listen(PORT,
    () => console.log(`http://localhost:${PORT}`))
