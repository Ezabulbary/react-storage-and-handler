const add = (first, second) => {
    return first + second;
}

const multiPlay = (first, second) => {
    return first * second;
}

const getTotalPrice = products => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {
    add, 
    multiPlay,
    getTotalPrice as getTotal
};