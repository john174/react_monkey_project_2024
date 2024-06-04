// src/pages/EmployeePage.js
import React from 'react';
import EmployeeDetails from '../components/EmployeeDetails';

const EmployeePage = ({ employees }) => {
    return (
        <div className="employee-page">
            <EmployeeDetails employees={employees} />
        </div>
    );
};

export default EmployeePage;
