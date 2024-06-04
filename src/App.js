// src/App.js
import './index.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import EmployeePage from './pages/EmployeePage';
import FavoritesPage from './pages/FavoritesPage';
import FavoritesProvider from './contexts/FavoritesContext';
import axios from 'axios';

const App = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios.get('https://randomuser.me/api/?results=10&seed=google');
            setEmployees(response.data.results);
        };

        fetchEmployees();
    }, []);

    return (
        <FavoritesProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="*" element={<HomePage employees={employees} setEmployees={setEmployees} />} />
                    <Route path="/employee/:id" element={<EmployeePage employees={employees} />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </Router>
        </FavoritesProvider>
    );
};

export default App;
