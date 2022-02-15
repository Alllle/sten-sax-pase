const routes = require("./routes");
const utils = require("./utils");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.json());
app.use(routes);

const regularExp = /.*/

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

    test('with game started and one player move: ', done => {
        request(app)
            .post('/api/games')
            .send({name: "lisa"})
            .then((response) => {
                    request(app)
                    .post(`/api/games/${response.body}/move`)
                    .send({name: "lisa", move: "Rock"})
                    .expect('You did Rock. Good luck!')
                    .then(() => {
                        request(app)
                        .get(`/api/games/${response.body}`)
                        .expect(utils.gameToString({id:0, player1:{name: 'lista', move: 'Rock'}}), done)
                    })
                });
    });
});