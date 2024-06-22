import React from 'react';
import styled from 'styled-components';
import BoxSx from '../components/box2';


const subHeadingStyle = {
  fontSize: '14px',
  fontWeight: 600,
  color: '#757575',
  marginTop: '20px',
  marginBottom: '8px',
};

const subHeadingStyle1 = {
  fontSize: '14px',
  fontWeight: 600,
  color: '#757575',
  marginTop: '20px',
  marginBottom: '8px',
  textAlign: 'right',
};

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '14px',
  color: '#000000',
  padding: '4px 0',
};

const amountStyle = {
  fontWeight: 600,
};

// Styled component for the Net Salary container
const NetSalaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: #ffffff;
`;

// Function to calculate APIT based on gross earnings
const calculateAPIT = (grossEarnings) => {
  let apit = 0;

  if (grossEarnings <= 100000) {
    apit = 0;
  } else if (grossEarnings <= 141667) {
    apit = grossEarnings * 0.06 - 6000;
  } else if (grossEarnings <= 183333) {
    apit = grossEarnings * 0.12 - 14500;
  } else if (grossEarnings <= 225000) {
    apit = grossEarnings * 0.18 - 25500;
  } else if (grossEarnings <= 266667) {
    apit = grossEarnings * 0.24 - 39000;
  } else if (grossEarnings <= 308333) {
    apit = grossEarnings * 0.30 - 55000;
  } else {
    apit = grossEarnings * 0.36 - 73500;
  }

  return apit;
};

// Component to display Salary Details
export default function SalaryDetails({ basicSalary = 0, allowances = [], deductions = [] }) {
  // Calculate total earnings from basic salary and allowances
  const totalEarnings = basicSalary + allowances.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
  
  // Calculate total earnings for EPF purposes
  const totalEarningsForEPF = basicSalary + allowances.reduce((acc, curr) => (curr.epfEtf ? acc + parseFloat(curr.amount || 0) : acc), 0);
  
  // Calculate total deductions
  const grossDeductions = deductions.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
  
  // Calculate gross earnings after deductions
  const grossEarnings = totalEarnings - grossDeductions;
  
  // Calculate gross salary for EPF
  const grossSalaryForEPF = totalEarningsForEPF - grossDeductions;

  // Calculate Employee and Employer EPF and ETF contributions
  const employeeEPF = grossSalaryForEPF * 0.08;
  const employerEPF = grossSalaryForEPF * 0.12;
  const employerETF = grossSalaryForEPF * 0.03;

  // Calculate APIT
  const apit = calculateAPIT(grossEarnings);
  
  // Calculate net salary
  const netSalary = grossEarnings - employeeEPF - apit;
  
  // Calculate Cost to Company (CTC)
  const ctc = grossEarnings + employerEPF + employerETF;

  return (
    <div className="SalaryDetails">
      <BoxSx>
        <div style={{ padding: '16px', position: 'relative' }}>
          <h1
            style={{
              padding: 0,
              color: '#000000',
              fontFamily: 'Inter',
              fontSize: '20px',
              fontWeight: 700,
            }}
          >
            Your Salary
          </h1>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={subHeadingStyle}>Items</h2>
            <h2 style={subHeadingStyle1}>Amount</h2>
          </div>
          
          {/* Display various salary components */}
          <div style={itemStyle}>
            <span>Basic Salary</span>
            <span style={amountStyle}>{basicSalary.toLocaleString()}</span>
          </div>
          {/* <div style={itemStyle}>
            <span>Total Earnings</span>
            <span style={amountStyle}>{totalEarnings.toLocaleString()}</span>
          </div> */}
          <div style={itemStyle}>
            <span>Gross Deduction</span>
            <span style={amountStyle}>- {grossDeductions.toLocaleString()}</span>
          </div>
          <div style={itemStyle}>
            <span>Gross Earnings</span>
            <span style={amountStyle}>{grossEarnings.toLocaleString()}</span>
          </div>
          {/* <div style={itemStyle}>
            <span>Gross Salary for EPF</span>
            <span style={amountStyle}>{grossSalaryForEPF.toLocaleString()}</span>
          </div> */}
          <div style={itemStyle}>
            <span>Employee EPF (8%)</span>
            <span style={amountStyle}>- {employeeEPF.toLocaleString()}</span>
          </div>
          <div style={itemStyle}>
            <span>APIT</span>
            <span style={amountStyle}>- {apit.toLocaleString()}</span>
          </div>

          {/* Display Net Salary */}
          <NetSalaryContainer>
            <span style={{ fontWeight: 700 }}>Net Salary (Take Home)</span>
            <span style={{ ...amountStyle, fontWeight: 700 }}>{netSalary.toLocaleString()}</span>
          </NetSalaryContainer>

          <h2 style={{ ...subHeadingStyle, marginTop: '20px' }}>Contribution from the Employer</h2>
          
          {/* Display Employer Contributions */}
          <div style={itemStyle}>
            <span>Employer EPF (12%)</span>
            <span style={amountStyle}>{employerEPF.toLocaleString()}</span>
          </div>
          <div style={itemStyle}>
            <span>Employer ETF (3%)</span>
            <span style={amountStyle}>{employerETF.toLocaleString()}</span>
          </div>
          <div style={{ ...itemStyle, borderTop: '1px solid #e0e0e0', paddingTop: '8px', marginTop: '8px' }}>
            <span>CTC (Cost to Company)</span>
            <span style={amountStyle}>{ctc.toLocaleString()}</span>
          </div>
        </div>
      </BoxSx>
    </div>
  );
}
