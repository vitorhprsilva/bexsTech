import React, { useState } from 'react'

import './styles.css'

export const InputText = ({placeholder, onChangeText, maskFunction, maxLength}) => {

  const [text, setText] = useState('')

  const handleChange = (text) => {
    const parseValue = (value) => {
      if (maskFunction) {
        return maskFunction(value, setText)
      }
      return text
    }

    const parsedText = parseValue(text)

    if (onChangeText) {
      onChangeText(parsedText)
    }

    return parsedText
  }

  return (
      <input 
        placeholder={placeholder} 
        name={placeholder} 
        maxLength={maxLength}
        onChange={(text) => {
          const newText = handleChange(text.target.value)
          // onChangeText(newText)
          setText(newText)
        }} 
        value={text}
        className='input'
      />
  );
}
