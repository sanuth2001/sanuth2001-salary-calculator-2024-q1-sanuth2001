import React from 'react';

const Textbox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      style={{
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontFamily: 'Inter', 
        fontSize: '16px', 
        width: '54%', 
        boxSizing: 'border-box', 
      }}
      placeholder="Enter Basic Salary"
    />
  );
}

export default Textbox;
