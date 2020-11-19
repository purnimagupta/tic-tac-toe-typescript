import React, { useState } from 'react';
import { Input as AntInput } from 'antd';
import { validateInput } from './utils/validate';
import styled from 'styled-components';

interface StateProps {
    value: number;
    error?: string;

}

interface Props {
    onEnter: (value: number) => void;
    min: number;
    max: number;
    title: string;
}
function Input(props: Props) {
    const [value, setValue] = useState<StateProps["value"]>(3);
    const [error, setError] = useState<StateProps["error"]>('')
    const { title, onEnter, min, max } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        const { isValidBoard, error } = validateInput(min, max, value)
        if(isValidBoard) {
            setValue(parseInt(value))
            setError('')
        } else {
            setError(error)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            if(!error) {
                onEnter(value)
            }
        }
    }
    return (
        <>
            <AntInput 
                type="number" 
                onChange={handleChange}
                defaultValue={value}
                onKeyPress={handleKeyPress}
                placeholder={title}
                min={props.min}
                max={props.max}
            />
            { error ? <StyledError>{error}</StyledError> : null }
        </>
    )
}

export default Input;

const StyledError = styled.div`
    color: red;
    padding: 20px;
    font-size: 17px;
`


