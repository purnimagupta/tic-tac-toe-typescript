export function generateAllWinningCombination(boardSize: number) {
    // Let's first generate rows combinations which is 
    // [0, 1,2], [3, 4, 5], [6, 7, 8]
    let winningCombinations: Array<Array<number>> = [];

    function generateRowMoves(boardSize: number) {
        for(let i=0; i<boardSize; i++) {
            let subArray = [];
            let nextIterationBegins = boardSize*i;
            for(let j= nextIterationBegins; j<nextIterationBegins+boardSize ; j++) {
                subArray.push(j) // push 0, 1, 2
            }
            winningCombinations.push(subArray);
        }
    }

    function generateColumnMoves(boardSize: number) {
         for(let i=0; i<boardSize; i++) {
            let subArray = [];
            let terminateloop = boardSize * boardSize - (boardSize - i)
            for(let j=i; j<=terminateloop;  j += boardSize) {
            subArray.push(j)
            }
            winningCombinations.push(subArray)
         }
    
    }

    function generateLeftDiagonal(boardSize: number) {
        /* 
            [0, 4, 8] 0+4(boardSize+1) = 4, 4+4 = 8, 8<boardSize*boardSize
        */
        let terminateloop = boardSize*boardSize;
        let subArray = [];
        for(let i=0; i<terminateloop; i += boardSize+1) {
                subArray.push(i)
        }
        winningCombinations.push(subArray);
    }
    function generateRightDiagonal(boardSize: number) {
        /* 
         [2, 4, 6] 2, 2+2 = 4, 4+2 = 6
            3 * 2 = 6
            3 
        */
        let subArray = [];
        let terminateloop = (boardSize-1)*boardSize
        for(let i=boardSize-1; i<=terminateloop; i += boardSize-1) {
            subArray.push(i);
        }
        winningCombinations.push(subArray)
    }
    generateRowMoves(boardSize);
    generateColumnMoves(boardSize);
    generateLeftDiagonal(boardSize)
    generateRightDiagonal(boardSize)
    return winningCombinations;
}

function getWinningMoves(cells: Array<string | null>, winningCombinations: Array<Array<number>>){
    return winningCombinations.filter((winningCombination) => {
        return winningCombination.reduce((acc, val) => {
          return cells[val] === acc ? acc : null
        }, cells[winningCombination[0]]) 
    });
}
export function isWon(cells: Array<string | null>, winningCombinations:Array<Array<number>>){
    const win = getWinningMoves(cells, winningCombinations);
    return win.length ? { isWon: true, moves: win[0]} : { isWon: false, moves: []}
}

   

export function isDraw(cells: Array<string | null>){
    if(!cells.includes(null)){
        return true
    }
    return false
}
