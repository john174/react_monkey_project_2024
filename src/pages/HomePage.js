// src/pages/HomePage.js
import React from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import EmployeeList from '../components/EmployeeList';
import { Routes, Route } from 'react-router-dom';
import EmployeePage from './EmployeePage';

const HomePage = ({ employees, setEmployees }) => {
    const handleSearch = async (query) => {
        const response = await axios.get(`https://randomuser.me/api/?results=10&seed=${query}`);
        setEmployees(response.data.results);
    };

    return (
        <div className="home-page">
            <SearchBar onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<EmployeeList employees={employees} />} />
                <Route path="/employee/:id" element={<EmployeePage employees={employees} />} />
            </Routes>
        </div>
    );
};

export default HomePage;
