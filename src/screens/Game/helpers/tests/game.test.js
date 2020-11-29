import {
    generateAllWinningCombination,
    isDraw,
    getWinningMoves
} from '../game';

const allPossibleMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellsConfigWhenNooneWins = [
    'X', 'O', 'X',
    'O', 'X', 'O',
    'O', 'X', 'O'
]
const cellsConfigWhenPlayerXWins = [
    'X', 'O', 'X',
    'O', 'X', 'O',
    'O', 'X', 'X'
]
const cellsConfigWhenPlayerOWins = [
    'X', null, 'O',
    'O', 'X', 'O',
    'O', 'X', 'O'
]
describe("Generate all possible winning combination for given board size", () => {

    it('generate 2d array with all the valid moves', () => {
        const possibleMoves = generateAllWinningCombination(3);
        expect(possibleMoves).toEqual(allPossibleMoves)
    });
    /* 
        Test 2: player wins the game if any of the possible moves array contains either 'X' or 'O  
        Test 3: If there are no moves which have same values then check if there are no null values in the
                board that means board is full and it's a draw.
        Test 4: If it's render board dyamically according to the given size
        Test 5: If hovering on empty cells, it should display X or O depending on Player's move
    */
    it('when no player wins the game', () => {
        const gameStatus = isDraw(cellsConfigWhenNooneWins);

        expect(gameStatus).toEqual(true);
    });

    it('return the winning array When Player X wins', () => {
        const winningMoves = getWinningMoves(cellsConfigWhenPlayerXWins, allPossibleMoves);
        expect(winningMoves).toEqual([[0, 4, 8]])
        expect(cellsConfigWhenPlayerXWins[0]).toEqual('X')
    });

    it('return the winning array When Player O wins', () => {
        const winningMoves = getWinningMoves(cellsConfigWhenPlayerOWins, allPossibleMoves);
        expect(winningMoves).toEqual([[2, 5, 8]])
        expect(cellsConfigWhenPlayerOWins[2]).toEqual('O')
    });
});
