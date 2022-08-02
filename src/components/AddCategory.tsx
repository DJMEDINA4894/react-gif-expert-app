
import { useState } from 'react'
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

export const AddCategory = ( { onNewCategory }:any ): JSX.Element => {
  
  const [value, setValue] = useState('');

    const handlerChange = ( {target}:React.ChangeEvent<HTMLInputElement> ):void => {
      setValue( target.value );
    }

    const handlerSubmit = ( event:React.FormEvent<HTMLFormElement> ):void => {
      event.preventDefault();
      const newValue = value.trim();
      if(newValue.length < 1 ) return;

      onNewCategory( newValue )

      setValue('');
    }

  return (
    <form action="" onSubmit={ handlerSubmit }>
      <input 
        type='text'
        placeholder='AddCategory'
        value={ value }
        onChange={ handlerChange }
        /> 
      </form>
  )
}

