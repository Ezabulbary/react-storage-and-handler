import React from 'react';

const Cosmetic = (props) => {
    return (
        <div>
            <h4>Name: {props.product.name}</h4>
            <p>Price:{props.product.price}</p>
        </div>
    );
};

export default Cosmetic;