import React from 'react';
import { Card } from 'antd';
import Input from '../../components/Input';

import styled from 'styled-components';

interface Props {
    onEnter: (value: number) => void;
}
function Home(props: Props) {
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