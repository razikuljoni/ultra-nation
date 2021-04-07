import React from 'react';

const cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h3>This  is cart: {cart.length}</h3>
            <h3>Total Population: {totalPopulation}</h3>
        </div>
    );
};

export default cart;