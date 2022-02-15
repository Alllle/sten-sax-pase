const routes = require("./routes");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.json());
app.use(routes);

test('/ should return some text', done => {
    request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=utf-8', done);
})

describe('/api/games/:id: ', () => {
    test('without setup: ', done => {
        request(app)
            .get('/api/games/0')
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect('Game with id 0 not found', done);
    })
})