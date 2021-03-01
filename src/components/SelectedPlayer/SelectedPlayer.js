import React from 'react';
import "./SelectedPlayer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const SelectedPlayer = (props) => {
//deselectHandeler
    const {name,role,style,jersey,salary,image}=props.player;
    return (
        <div className="selected-player">
            <img src={image} alt="Profile" className="selected-profile-image"/>
            <h6 className="text-success">{name}</h6>
            <p>Role: <span className="text-info"> {role}</span></p>
            <p>Style: <span className="text-info"> {style}</span></p>
            <p>Jersey No: {jersey}</p>
            <p>Salary: <span className="text-primary">{salary} USD</span> </p> 
            <button id="deselect-btn" onClick={()=>props.deselectHandeler(props.player)}>
            <FontAwesomeIcon icon={faWindowClose} size="2x" />
            </button>
                     
        </div>
    );
};

export default SelectedPlayer;