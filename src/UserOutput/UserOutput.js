import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>{props.userName}</p>
            <p>Let's make a nice big leafy tree. Isn't it fantastic that you can change your mind and create all these happy things?</p>
        </div>
    )
}

export default UserOutput;