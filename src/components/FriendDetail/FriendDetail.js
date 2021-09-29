import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, []);
    const history = useHistory();
    const handleClick = () => {
        history.push('/friends');
    }
    return (
        <div>
            Friend Detail Coming Soon:{friendId}
            <h2>Friend Name:{friend.name}</h2>
            <p>Company: {friend.company?.name}</p>
            <button onClick={handleClick}>Back to all friends</button>
        </div>
    );
};

export default FriendDetail;