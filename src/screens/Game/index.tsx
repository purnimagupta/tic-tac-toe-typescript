import React from 'react';
import {
    RouteComponentProps,
    Link,
    withRouter
}from 'react-router-dom';
import { Card } from 'antd';
import styled from 'styled-components';

import Board from './Board';
import { 
    generateAllWinningCombination,
    isWon,
    isDraw
 } from './helpers/game';

interface StateProps {
    cells: Array<string | null>;
    isXNext: boolean;
    possibleWinningCombinations: Array<Array<number>>;
    status: string;
}
interface LocalProps {
    size: number;
}

type Props = RouteComponentProps & LocalProps;
/* 
    We have size coming from the parent component now we can initialize our board size here and
    render grid accordingly
*/
enum GameStatus {
   ACTIVE="ACTIVE",
   DRAW="DRAW",
   X_WINS="X WINS!",
   O_WINS="O WINS!"
}
class Game extends React.Component<Props, StateProps> {
    constructor(props: Props){
        super(props);
        this.state = {
            cells: Array(props.size * props.size).fill(null),
            possibleWinningCombinations: generateAllWinningCombination(props.size),
            isXNext: true,
            status: GameStatus.ACTIVE
        }
    }
    makeMove = (index: number) => {
        const { status, cells, isXNext, possibleWinningCombinations } = this.state;
        //if cells is not occupied then place 'X' or 'O' then set the state and check if user has won or not
        let clonedCells = cells.slice(0);
        if(status === GameStatus.ACTIVE) {
            if(!clonedCells[index]) { // if cell is not empty then do sth
                clonedCells[index] = isXNext ? 'X' : 'O';

                this.setState({
                    cells: clonedCells,
                    isXNext: !isXNext
                })
            }
            this.updateGameStatus(clonedCells, possibleWinningCombinations);
        }
    }
    updateGameStatus = (cells: StateProps["cells"], winningCombinations: StateProps["possibleWinningCombinations"]) => {
        const { isWon: hasWon, moves }= isWon(cells, winningCombinations);
        if(hasWon) {
            this.setState({
                status: cells[moves[0]] === 'X' ? GameStatus.X_WINS : GameStatus.O_WINS
            })
        } else if(isDraw(cells)) {
            this.setState({
                status: GameStatus.DRAW
            })
        }         
    }
    handleClick = (index: number) => {
       this.makeMove(index);
    }

    resetBoard = () => {
       this.props.history.push('/')
    }
    render() {
        console.log("game size is now", this.props.size)
        const { cells, isXNext, status } = this.state;
        return (
            <StyledCard>
                <Link to="/">Go back to Home Page</Link>
                {/* Let's display whose turn it is on the screen */}
                <StyledHeading isXNext={isXNext}> Next Player is: {isXNext ? 'X' : 'O'}</StyledHeading>
                <Board 
                    cells={cells} 
                    onClick={this.handleClick}
                    size={this.props.size}
                    isXNext={isXNext}
                /> 
                {
                    status !== GameStatus.ACTIVE
                    ?
                    <Overlay status={status}>
                        <div>{status}</div>
                        <button onClick={this.resetBoard}>Restart</button>
                    </Overlay>
                    :
                    null 
                }
            </StyledCard>
        );
    }
}

export default withRouter(Game);

const StyledCard = styled(Card)`
    text-align: center;
    max-width: fit-content;
    padding: 40px;
    border: 3px solid lightslategrey;
    margin: 100px auto;
`;

const StyledHeading = styled.h3<{isXNext: StateProps["isXNext"]}>`
    font-size: xx-large;
    color: ${props => props.isXNext ? '#24bac9': 'chocolate'};
    margin-top: 20px;
`;

const Overlay = styled.div<{status: StateProps["status"]}>`
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    display: ${(props) => props.status === GameStatus.ACTIVE ? 'none' : 'flex'};
    color: white;
    > button {
        background-color: #f07f7f;
        border: 1px solid black;
        padding: .25em .5em;
        cursor: pointer
    }

    > button:hover {
        background-color: black;
        color: #f07f7f;
        border-color: white;
    }

`;