// src/components/EmployeeDetails.js
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { FavoritesContext } from '../contexts/FavoritesContext';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const EmployeeDetails = ({ employees }) => {
    const { id } = useParams();
    const { favorites, setFavorites } = useContext(FavoritesContext);
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        if (employees && employees.length > 0) {
            const selectedEmployee = employees.find(emp => emp.login.uuid === id);
            setEmployee(selectedEmployee);
        }
    }, [id, employees]);

    const toggleFavorite = () => {
        if (employee) {
            const isFavorite = favorites.some(fav => fav.login.uuid === employee.login.uuid);
            if (isFavorite) {
                setFavorites(favorites.filter(fav => fav.login.uuid !== employee.login.uuid));
            } else {
                setFavorites([...favorites, employee]);
            }
        }
    };

    if (!employee) return <div>Loading...</div>;

    const isFavorite = favorites.some(fav => fav.login.uuid === employee.login.uuid);
    
    // Debugging: вывод координат в консоль
    console.log('Employee Coordinates:', employee.location.coordinates);

    return (
        <div className="employee-details">
            <img src={employee.picture.large} alt={employee.name.first} />
            <h2>{employee.name.first} {employee.name.last}</h2>
            <p>Age: {employee.dob.age}</p>
            <p>Country: {employee.location.country}</p>
            <p>City: {employee.location.city}</p>
            <p>Email: {employee.email}</p>
            <p>Phone: {employee.phone}</p>
            <button className="favorite-btn" onClick={toggleFavorite}>
                {isFavorite ? '★' : '☆'}
            </button>
            <MapContainer center={[employee.location.coordinates.latitude, employee.location.coordinates.longitude]} zoom={13} style={{ height: '300px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[employee.location.coordinates.latitude, employee.location.coordinates.longitude]}>
                    <Popup>{employee.location.city}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default EmployeeDetails;
