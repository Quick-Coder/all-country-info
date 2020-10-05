import React, { useContext } from 'react';


const CountryName = (props) => {
    const {name}=props.name;
    return (
        <div style={{color:'blue'}}>
            
            <strong><li> {name} </li></strong>
        </div>
    );
};

export default CountryName;