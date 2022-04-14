import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id, company, email, phone} = props.product;

    const addToCard = (id) => {
        console.log('add item', id)
    }

    return (
        <div id="product">
            <div className="product">
                <h4>Name: {name}</h4>
                <p>Id: {id}</p>
                <p>Company: {company}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Price:{price}</p>
                <button onClick={() => addToCard(id)}>Add to Card</button>
            </div>
        </div>
    );
};

export default Cosmetic;