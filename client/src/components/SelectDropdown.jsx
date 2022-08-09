import React from 'react';
import { Field, ErrorMessage } from 'formik';
import {
  FormControl,
  FormErrorMessage
} from '@chakra-ui/form-control';
import { Select } from '@chakra-ui/react';

function SelectDropdown(props) {
  const { name, options, ...rest } = props;

  return (
    <FormControl>

      <Field as={Select} id={name} name={name} {...rest} >
      {options.map(option => {
        return (
          <option key={option.value} name={option.value}>
            {option.key}
            </option>
        )
      })}
      </Field>
      <ErrorMessage as={FormErrorMessage} name={name} />
    </FormControl>

  );
}

export default SelectDropdown;