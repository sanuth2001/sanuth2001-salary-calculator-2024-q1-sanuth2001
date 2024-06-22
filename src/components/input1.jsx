import React, { useState } from 'react';
import styled from 'styled-components';

const Input1 = ({ onRemove, value, onChange, isChecked, onCheckboxChange }) => {
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState(value);

  const handleExpenseTypeChange = (e) => {
    setExpenseType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    onChange(e);
  };

  const handleCheckboxChange = (e) => {
    onCheckboxChange(e.target.checked);
  };

  return (
    <Input1Container>
      <TextInput
        type="text"
        value={expenseType}
        
        placeholder="Pay Details (Title)"
        onChange={handleExpenseTypeChange}
      />
      <TextInput
        type="text"
        value={amount}
        placeholder="Amount"
        onChange={handleAmountChange}
      />
      <RemoveButton onClick={onRemove}>X</RemoveButton>
      <CheckboxInput
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      
      <CheckboxLabel>EPF/ETF</CheckboxLabel>
      
    </Input1Container>
  );
};

export default Input1;

// Styled-components
const Input1Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 150px;
  margin-right: 10px;

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
`;

const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background-color: #f0f0f0;
  border-radius: 50%; // Ensures the button is circular
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0; // Remove padding to ensure it stays circular

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 600px) {
    align-self: flex-end;
  }
`;
