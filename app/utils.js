

exports.gameToString = (game) => {
    return `Game id: ${game.id}
    Player1: ${game?.player1?.name + ' ' + game?.player1?.move ? 'has done their move!' : 'has not yet decided their move!'}
    Player2: ${game?.player2?.name + ' ' + game?.player2?.move ? 'has done their move!' : 'has not yet decided their move!'}`
} 

exports.whosTheWinner = (game) => {
    const move1 = game.player1.move;
    const move2 = game.player2.move;
    if(move1 == move2) {
        return 'draw';
    }
    if(move1 == 'Rock' && move2 == 'Sciccors' ||
        move1 == 'Sciccors' && move2 == 'Paper' ||
        move1 == 'Paper' && move2 == 'Rock') {
        return game.player1.name;
    } else {
        return game.player2.name;
    }
}
