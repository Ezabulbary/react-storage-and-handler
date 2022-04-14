import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    }, [])
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