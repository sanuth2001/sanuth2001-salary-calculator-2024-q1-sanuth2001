import React, { useState } from 'react';
import styled from 'styled-components';
import BoxSx from '../components/box';
import Textbox from '../components/textbox';
import Input1 from '../components/input1';
import Input2 from '../components/input2';
import SalaryDetails from '../page/salarydetail';
import resetIcon from '../assets/Icon color.png';
import plusIcon from '../assets/Vector.png';

const headingStyle = {
  padding: 0,
  color: '#000000',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: 600,
};

const paragraphStyle = {
  fontSize: '12px',
  lineHeight: '20px',
  fontWeight: 400,
  color: '#757575',
};

const resetButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#007bff',
  fontSize: '14px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  textDecoration: 'none',
  position: 'absolute',
  top: '16px',
  right: '16px',
};

const resetIconStyle = {
  marginRight: '8px',
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  gap: 20px;
  min-height: 100vh; // Center vertically
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 16px 20px; 
  }
`;

const FormContainer = styled(BoxSx)`
  flex: 1;
  max-width: 500px; 
  margin: 10px;
  padding: 16px; 
  box-sizing: border-box;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  color: #007bff;
  font-size: 14px;
  background: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  margin-top: 10px;
`;

const AddIcon = styled.img`
  margin-right: 8px;
`;

const SalaryDetailsContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 10px;
  padding: 16px; 
  box-sizing: border-box;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #e0e0e0;
  margin: 20px 0; 
`;

export default function Set1() {
  const [basicSalary, setBasicSalary] = useState('');
  const [allowances, setAllowances] = useState([]);
  const [deductions, setDeductions] = useState([]);

  // Handlers for adding, removing, and updating allowances and deductions

  const handleAddAllowance = () => {
    setAllowances([...allowances, { id: Date.now(), amount: '', epfEtf: true }]);
  };

  const handleRemoveAllowance = (id) => {
    setAllowances(allowances.filter((allowance) => allowance.id !== id));
  };

  const handleAllowanceChange = (id, amount) => {
    setAllowances(allowances.map(allowance => allowance.id === id ? { ...allowance, amount } : allowance));
  };

  const handleAllowanceCheckboxChange = (id, epfEtf) => {
    setAllowances(allowances.map(allowance => allowance.id === id ? { ...allowance, epfEtf } : allowance));
  };

  const handleAddDeduction = () => {
    setDeductions([...deductions, { id: Date.now(), amount: '' }]);
  };

  const handleRemoveDeduction = (id) => {
    setDeductions(deductions.filter((deduction) => deduction.id !== id));
  };

  const handleDeductionChange = (id, amount) => {
    setDeductions(deductions.map(deduction => deduction.id === id ? { ...deduction, amount } : deduction));
  };

  const handleReset = () => {
    setBasicSalary('');
    setAllowances([]);
    setDeductions([]);
  };

  const grossEarnings = parseFloat(basicSalary) + allowances.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
  const grossDeductions = deductions.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);

  return (
    <div className="Set1">
      <Container>
        <FormContainer>
          <div>
            <button style={resetButtonStyle} onClick={handleReset}>
              <img src={resetIcon} alt="Reset" style={resetIconStyle} />
              Reset
            </button>
            <h1
              style={{
                padding: 0,
                color: '#000000',
                fontFamily: 'Inter',
                fontSize: '20px',
                fontWeight: 700,
              }}
            >
              Calculate Your Salary
            </h1>

            <h2 style={headingStyle}>Basic Salary</h2>
            <Textbox value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} />

            <h2 style={headingStyle}>Earnings</h2>
            <p style={paragraphStyle}>Allowance, Fixed Allowance, Bonus and etc.</p>
            {allowances.map((allowance) => (
              <Input1
                key={allowance.id}
                value={allowance.amount}
                onChange={(e) => handleAllowanceChange(allowance.id, e.target.value)}
                onRemove={() => handleRemoveAllowance(allowance.id)}
                isChecked={allowance.epfEtf}
                onCheckboxChange={(checked) => handleAllowanceCheckboxChange(allowance.id, checked)}
              />
            ))}
            <AddButton onClick={handleAddAllowance}>
              <AddIcon src={plusIcon} alt="Add" />
              Add New Allowance
            </AddButton>

            <Divider />

            <h2 style={headingStyle}>Deductions</h2>
            <p style={paragraphStyle}>Salary Advances, Loan Deductions and all</p>
            {deductions.map((deduction) => (
              <Input2 key={deduction.id} value={deduction.amount} onChange={(e) => handleDeductionChange(deduction.id, e.target.value)} onRemove={() => handleRemoveDeduction(deduction.id)} />
            ))}
            <AddButton onClick={handleAddDeduction}>
              <AddIcon src={plusIcon} alt="Add" />
              Add New Deduction
            </AddButton>
          </div>
        </FormContainer>
        <SalaryDetailsContainer>
          <SalaryDetails basicSalary={parseFloat(basicSalary) || 0} allowances={allowances} deductions={deductions} />
        </SalaryDetailsContainer>
      </Container>
    </div>
  );
}
