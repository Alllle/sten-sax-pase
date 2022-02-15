export interface Player {
    name: string,
    move: Move
}

export type Move = 'Rock' | 'Paper' | 'Scissors';

export interface Game {
    id: number,
    player: [Player, Player]
}