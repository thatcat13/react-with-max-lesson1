import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
        border: '2px solid grey'
    }
    return (
        <div>
            <p>Name:</p>
            <input
                style={inputStyle}
                type='text'
                onChange={props.changed}
                value={props.currentName} />
        </div>
    )
}

export default UserInput;