const games = [];

const utils = require('./utils');
const crypto = require('crypto');

const findGame = (id) => games.find(game => game.id === id);
const error404 = (id, res) => res.status(404).send(`Game with id ${id} not found`);
const error409 = (message, res) => res.status(409).send(message);

// GET /api/games/{id}
exports.game_state = (req, res) => {
    const { id } = req.params;
    let game = findGame(id);
    if(game?.completed) {
        res.send(game.completed === 'draw' ? 'This round was a draw! Try again!' :
            game.completed + ' has won this round! Congratulations!');
    } else if(game) {
        res.send(utils.gameToString(game));
    } else {
        error404(id, res);
    }
}

// POST /api/games
exports.start_game = (req, res) => {
    const { name } = req.body;
    const id = crypto.randomUUID();
    games.push({id, player1: {name}})
    res.send(id);
}

// POST /api/games/{id}/join
exports.join_game = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    let game = findGame(id);
    if(!game) {
        error404(id, res);
        return
    }
    if(game.player2.name) {
        error409('Player2 has already joined this game', res);
        return;
    }
    game.player2.name = name;
    res.send(`You have joined game with id ${id}`)
}

// POST /api/games/{id}/move
exports.move = (req, res) => {
    const { id } = req.params;
    const { name, move } = req.body;
    let game = findGame(id);
    if(!game) {
        error404(id, res);
        return;
    }

    if(game.player1.name === name) {
        game.player1.move = move;
    } else if(game.player2.name === name) {
        game.player2.move = move;
    } else {
        error409('No player with that name!', res);
        return;
    }
    if(game.player1?.move && game.player2?.move) {
        game.completed = utils.whosTheWinner(game);
    }
    res.send(`You did ${move}. Good luck!`);
}
