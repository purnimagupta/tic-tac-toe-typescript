import React from 'react';
import { Card } from 'antd';
import Input from '../../components/Input';

import styled from 'styled-components';

interface Props {
    onEnter: (value: number) => void;
}
function Home(props: Props) {

    /* 
    
        This will be our home page when the app loads and here, we'll ask the player to input the value
        and as soon as player enters, we'll redirect the user to /game/ page where we'll show our game board.
        That's the idea for now.

        Now we need to save the input value when user presses enter key and redirect to Game page
    */
    return (
        <StyledCard title="Enter Board Size in Number">
            <Input 
                onEnter={props.onEnter}
                min={3}
                max={12}
                title="Choose Board Size in Number. For ex: 3"
                />   
        </StyledCard>
    )
}

export default Home;

const StyledCard = styled(Card)`
    width: 600px;
    height: 300px;
    background-color: #eef1f4;
    margin: 150px auto;
    padding: 30px;
`;