
const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get('/', (req, res) => {
    res.send('<div style="background:pink; color:green">HUR MAN SPELAR:</div>')
});

router.get('/api/games/:id', controller.game_state);

router.post('/api/games', controller.start_game);

router.post('/api/games/:id/join', controller.join_game);

router.post('api/games/:id/move', controller.move);

module.exports = router;