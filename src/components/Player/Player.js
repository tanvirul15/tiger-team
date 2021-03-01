import React from 'react';
import "./Player.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {

    const {name,hometown,DOB,age,role,style,jersey,salary,image}=props.player;
    return (
        <div className="player-card shadow-lg">
            <img src={image} alt="Profile" className="profile-image"/>
            <h4 className="text-success">{name}</h4>
            <hr/>
            <h5>Hometown: {hometown}</h5>
            <h5>Date of Birth: {DOB}</h5>
            <h5>Current Age: {age}</h5>
            <h5>Role: <span className="text-info"> {role}</span></h5>
            <h5>
                Style: <span className="text-info"> {style}</span></h5>
            <h5>Jersey No: {jersey}</h5>
            <h5>Salary: <span className="text-primary">{salary} USD</span> </h5>
            <button className="btn btn-info" onClick={()=>props.clickHandeler(props.player)}>
            <FontAwesomeIcon icon={faPlusSquare} /> Select Player</button>
           
        </div>
    );
};

export default Player;