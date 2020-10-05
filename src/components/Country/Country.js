import { Router } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const {flag,name,capital,region}=props.country;
    const handleClicked=props.handleClicked;
    return (
        <div className='c-wrap d-flex p-3'>
            <div className="country-img">
                <img height='150px' width='600px' src={flag} alt=""/>
            </div>
            <div className="country-content ml-5">                
                <h5>Name: {name} </h5>                                
                <p><strong>Capital: {capital} </strong></p>
                <p>Region: {region} </p>
                <button className='main-btn'><a href={`/country/${name}`}>country details</a></button>
            </div>
        </div>
    );
};

export default Country;