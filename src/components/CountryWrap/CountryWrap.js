import React, { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { CountryInfo } from '../../App';
import Country from '../Country/Country';
import CountryName from '../CountryName/CountryName';

const CountryWrap = () => {
    const [countries, setCountries]=useContext(CountryInfo);
    useEffect(()=>{
       
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    const handleClicked=(country)=>{
        console.log('clicked', country)
    }
    return (
        <div>
            <Row>
                <Col xs={2} style={{backgroundColor:'azure'}}>
                 <h4><strong>Country Lists:</strong></h4>
                {
                    countries.map(name=><CountryName 
                        name={name}
                       
                        ></CountryName>)
                }
                </Col>
                <Col xs={10}>
                    {
                        countries.map(country=><Country 
                            country={country}
                            handleClicked={handleClicked}
                            ></Country>)
                    }
                </Col>
            </Row>
        </div>
    );
};

export default CountryWrap;