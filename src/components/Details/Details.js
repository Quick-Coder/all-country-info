import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Details = () => {
    const [info, setInfo]=useState([])   
    const {countryNmae}=useParams();
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryNmae}`)
        .then(res=>res.json())
        .then (data=>setInfo(data))
    },[])
    return (
        <div>
           <Row>
               <Col xs={2}></Col>
               <Col xs={10}>
                        {
                        info.map(item=>
                        <div className='c-wrap d-flex p-3'>
                            <div className="country-img">
                                <img height='150px' width='600px' src={item.flag} alt=""/>
                            </div>
                            <div className="country-content ml-5">                
                            <h5>Name: {item.name} </h5>                                
                            <p><strong>Capital: {item.capital} </strong></p>
                            <p>Region: {item.region} </p>
                            
                        </div>
                        </div>)
                        }
               </Col>
              
           </Row>
            
        </div>
    );
};

export default Details;