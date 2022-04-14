

const addToDb = id => {
    let shoppingCard;

    // get the shoppingcard 
    const storedCard = localStorage.getItem('shopping-card');
    storedCard ? shoppingCard = JSON.parse(storedCard) : shoppingCard = {};

    // add quantity 
    const quantity = shoppingCard[id];
    quantity ? shoppingCard[id] = quantity + 1 : shoppingCard[id] = 1;

    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
}


const removeFromDb = id => {
    const storedCard = localStorage.getItem('shopping-card');
    if(storedCard){
        const shoppingCard = JSON.parse(storedCard);
        if(id in shoppingCard){
            delete shoppingCard[id];
            localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
        } 
    }
}

const deleteShoppingCard = () => {
    localStorage.removeItem('shopping-card')
}


export {
    addToDb,
    removeFromDb,
    deleteShoppingCard
};