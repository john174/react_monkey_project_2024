import React, { useContext } from 'react';
import { FavoritesContext } from '../contexts/FavoritesContext';
import { EmployeeList } from './EmployeeList';

export const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);

    return (
        <div className="favorites">
            <h2>Favorite Employees</h2>
            <EmployeeList employees={favorites} />
        </div>
    );
};
