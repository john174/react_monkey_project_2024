// src/components/EmployeeCard.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

const EmployeeCard = ({ employee }) => {
    const { favorites, setFavorites } = useContext(FavoritesContext);

    const isFavorite = favorites.some((fav) => fav.email === employee.email);

    const toggleFavorite = () => {
        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav.email !== employee.email));
        } else {
            setFavorites([...favorites, employee]);
        }
    };

    return (
        <div className="employee-card">
            <img src={employee.picture.medium} alt={employee.name.first} />
            <h3>{employee.name.first} {employee.name.last}</h3>
            <p>Age: {employee.dob.age}</p>
            <p>Country: {employee.location.country}</p>
            <Link to={`/employee/${employee.login.uuid}`}>More Info</Link>
            <button onClick={toggleFavorite}>
                {isFavorite ? '★' : '☆'}
            </button>
        </div>
    );
};

export default EmployeeCard;
