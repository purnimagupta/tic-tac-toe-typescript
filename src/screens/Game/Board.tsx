import React from 'react';
import Cell from './Cell';
import styled from 'styled-components';
import reportWebVitals from '../../reportWebVitals';

interface Props {
    cells: Array<string | null>;
    onClick: (index: number) => void;
    size: number;
    isXNext: boolean;
}
function Board(props: Props) {
    // this component would require props like cells array which will be null in the beginning
    // we'll loop over this array and render <Cell /> component with the value whatever is inside the 
    // cells array
    /* 
    
        Now we've rendered grid of size 3*3 but our grid is gonna be dynamic in nature based on user input
        it can be 3*3 or it can be 5*5 and so on. So we need to check for it as well.

        So with repeat, we can change the column size dynamicaly


    */

    const { cells, onClick, size, isXNext } = props;
    return (
        <StyledBoard size={size}>
            {
                cells.map((cell, index) => {
                   return <Cell 
                            value={cell}
                            onClick={onClick}
                            index={index}
                            key={`row-col${index}`}
                            isXNext={isXNext}
                    />
                })
            }
        </StyledBoard>
        
    );
}

export default Board;

const StyledBoard = styled.div<{size: Props["size"]}>`
    display: grid;
    grid-template-columns: ${props => props.size ? `repeat(${props.size}, auto)` : null };
    padding: 20px;
    background: lightslategray;
    grid-gap: 6px;
    max-width: fit-content;
    margin: 50px auto;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 17px 50px;
`
