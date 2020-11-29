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
