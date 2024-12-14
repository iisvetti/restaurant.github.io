import React, { useState } from 'react';
import {
  FormContainer,
  InputContainer,
  InputField,
  SelectField,
  MessageField,
  MessageContainer,
} from './styles';

import { MenuItem, Button } from '@mui/material';

const options = [
  { value: 'option1', label: 'Birthday' },
  { value: 'option2', label: 'Wedding' },
  { value: 'option3', label: 'Not officcial meeting' },
  { value: 'option4', label: 'Meeting' },
];

const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const handleOptionChange = event => {
    setSelectedOption(event.target.value);
  };

  if (formSubmitted) {
    return <MessageContainer>Thank you for message us!</MessageContainer>;
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputContainer>
        <InputField label="Name" variant="outlined" />
        <InputField label="Email" variant="outlined" type="email" />
      </InputContainer>
      <InputContainer>
        <InputField
          label="Phone number"
          variant="outlined"
          type="tel"
          className="custom-input"
        />
        <SelectField
          variant="outlined"
          value={selectedOption}
          onChange={handleOptionChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Choose event
          </MenuItem>
          {options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectField>
      </InputContainer>
      <MessageField placeholder="Enter your message" />
      <Button type="submit" variant="contained">
        Send
      </Button>
    </FormContainer>
  );
};

export default Form;
