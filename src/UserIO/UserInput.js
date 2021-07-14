import React from 'react';

const UserInput= (props) =>{
    const userInputStyling = {
        border:'2px solid green'
    };
    return(
        <div>
            <br></br>
            <label>User Input</label> &nbsp;
            <input style = {userInputStyling} type="text" onChange={props.changeEvent} value={props.name}/>
        </div>
    )
};

export default UserInput;