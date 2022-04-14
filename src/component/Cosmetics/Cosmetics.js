import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const cosmetics = [
        {id:1, name: 'book', price: 400},
        {id:2, name: 'pen', price: 20},
        {id:3, name: 'huck', price: 40},
        {id:4, name: 'pad', price: 50},
        {id:5, name: 'pencil', price: 10},
        {id:6, name: 'canacur', price: 70}
    ]
    return (
        <div>
            <h1>My shopping center have many Products</h1>
            {
                cosmetics.map(product => <Cosmetic id={cosmetics.id} product={product}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;