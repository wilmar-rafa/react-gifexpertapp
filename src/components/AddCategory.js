import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleInputChange = (e)=>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);

        if (inputValue.trim().length > 2){
            setCategories(cats =>[ inputValue,...cats ]);
            //setCategories(cats =>[ inputValue ]);
            setInputValue('');
        }
    }

    //setinputValue();
    
    return (
        <form onSubmit = { handleSubmit }>
            
            <input
                type='text'
                value = {inputValue}
                onChange = {(e)=>{
                    handleInputChange(e);
                }}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}