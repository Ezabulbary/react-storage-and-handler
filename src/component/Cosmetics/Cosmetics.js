import React from 'react';
import { add, multiplay } from '../utilities/calculate';
// import add from '../utilities/calculate';

const Cosmetics = () => {
    const first = 4;
    const second = 54;
    const sum = add(first, second);
    const total = multiplay(sum, first)
    return (
        <div>
            <p>cosmetics: {total}</p>
        </div>
    );
};

export default Cosmetics;