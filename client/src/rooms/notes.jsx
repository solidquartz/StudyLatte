import {
  Text,
  Textarea
} from '@chakra-ui/react'
import React from 'react';



export const Notes = () => {

  let [value, setValue] = React.useState('');

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

  return (

    <>
      <Text mb='8px'>Take Notes: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
        size='sm'
      />
    </> 

  );

};