import React from 'react';
import { multiplay } from '../utilities/calculate';
// import add from '../utilities/calculate';

const Shoes = () => {
    const first = 44;
    const second = 32;
    const sum = multiplay(first, second);
    return (
        <div>
            <p>Shoes Price: {sum}</p>
        </div>
    );
};

export default Shoes;