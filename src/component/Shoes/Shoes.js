import React from 'react';
import { multiPlay } from '../utilities/calculate/calculate';


const Shoes = () => {
    const first = 44;
    const second = 32;
    const sum = multiPlay(first, second);
    return (
        <div>
            <p>Shoes Price: {sum}</p>
        </div>
    );
};

export default Shoes;