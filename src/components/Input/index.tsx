import React, { useState } from 'react';
import { Input as AntInput } from 'antd';

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
    const { title, onEnter } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(value) {
            setValue(parseInt(value));
            // let's clear the error 
            setError('')
        } else {
            setError('Enter valid board value')
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            onEnter(value)
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
            />
            { error ? <div>{error}</div> : null }
        </>
    )
}

export default Input;


