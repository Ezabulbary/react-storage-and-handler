import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { getTotal } from '../utilities/calculate/calculate';



const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, []);

    const total = getTotal(cosmetics)
    return (
        <div>
            <h1>My shopping center have many Products</h1>
            <p>Total: {total}</p>
            {
                cosmetics.map(product => <Cosmetic key={product.id} product={product}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;