import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees }) => {
    return (
        <div className="employee-list">
            {employees.map((employee) => (
                <EmployeeCard key={employee.login.uuid} employee={employee} />
            ))}
        </div>
    );
};

export default EmployeeList;
