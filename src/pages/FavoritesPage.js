// src/pages/FavoritesPage.js
import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import EmployeeCard from '../components/EmployeeCard';

const FavoritesPage = () => {
    const { favorites } = useContext(FavoritesContext);

    if (favorites.length === 0) {
        return <div>No favorite employees found.</div>;
    }

    return (
        <div className="favorites-page">
            {favorites.map(employee => (
                <EmployeeCard key={employee.login.uuid} employee={employee} />
            ))}
        </div>
    );
};

export default FavoritesPage;
