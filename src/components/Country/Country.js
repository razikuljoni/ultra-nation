import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const flagStyle = {height:'60px '}
    const handleCountry = props.handleCountry;
    return (
        <div>
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <h5>{population}</h5>
            <h5>{region}</h5>
            <button onClick={() => handleCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;