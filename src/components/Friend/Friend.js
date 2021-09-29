import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>I am {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p>Address: {address.city}</p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
        </div>
    );
};

export default Friend;