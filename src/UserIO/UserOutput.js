import React from 'react';
import './UserOutput.css';

const UserOutput= (props) =>{
    return(
        <div className="UserOutput">
            <p>{props.UserName}:{props.message}</p>
        </div>
    )
};

export default UserOutput;