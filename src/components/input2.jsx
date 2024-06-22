import React, { useState } from 'react';
import styled from 'styled-components';

const Input2 = ({ onRemove, value, onChange }) => {
  const [deductionType, setDeductionType] = useState('No Pay');
  const [amount, setAmount] = useState(value);

  const handleDeductionTypeChange = (e) => {
    setDeductionType(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    onChange(e);
  };

  return (
    <Input2Container>
      <TextInput
        type="text"
        value={deductionType}
        placeholder="Amount"
        onChange={handleDeductionTypeChange}
      />
      <TextInput
        type="text"
        value={amount}
        placeholder="Amount"
        onChange={handleAmountChange}
      />
      <RemoveButton onClick={onRemove}>X</RemoveButton>
    </Input2Container>
  );
};

export default Input2;

// Styled-components
const Input2Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 10px; /* Add margin to space out between boxes */

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
