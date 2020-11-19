import React from 'react';
import styled from 'styled-components';

interface Props {
    value: string | null;
    onClick: (index: number) =>  void;
    index: number;
    isXNext: boolean;
}
function Cell(props: Props) {
    let colorClass;

    if(props.value === 'X') {
        colorClass = 'X';
    } else if(props.value === 'O') {
        colorClass = 'O'
    }
    const { value, onClick, index, isXNext } = props;
    return (
        <StyledCell
            onClick={() => onClick(index)}
            value={value}
            className={colorClass}
            isXNext={isXNext}
        >
            {value}
        </StyledCell>
    );
}

export default Cell;

const StyledCell = styled.div<{value: Props["value"], isXNext: Props["isXNext"]}>`
    width: 100px;
    height: 100px;
    background: #e0e0e0;
    border: 1px solid black;
    padding: 20px;
    display: flex;
    display: -webkit-box;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    font-size: xx-large;
    cursor: pointer;
    border-radius: 5px;
    color: ${props => props.value === 'X' ? '#24bac9': 'chocolate'};
    :not(.X):not(.O):hover {
        background: linear-gradient(45deg,#a9d7c8, #eae0e000);
        ::after {
            content: ${(props) => `"${props.isXNext ? 'X' : 'O'}"`};
        }
    }
`;
