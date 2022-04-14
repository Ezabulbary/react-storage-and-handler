import React from 'react';
import { addToDb, removeFromDb } from '../utilities/fakedb/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id, company, email, phone} = props.product;

    const addToCard = id => {
        addToDb(id);
    }

    const removeFromCard = id => {
        removeFromDb(id);
    }

    return (
        <div className="product">
            <h4>Name: {name}</h4>
            <p>Id: {id}</p>
            <p>Company: {company}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Price:{price}</p>
            <button onClick={() => addToCard(id)}>Add to Card</button>
            <button onClick={() => removeFromCard(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;