import React from 'react';
import "./Player.css"

const Player = (props) => {

    const {name,hometown,DOB,age,role,style,jersey,salary,image}=props.player;
    console.log(name,hometown,DOB,age,role,style,jersey,salary,image);
    return (
        <div className="player-card">
            <img src={image} alt="Profile" className="profile-image"/>
            <h4>{name}</h4>
            <h5>Hometown: {hometown}</h5>
            <h5>Date of Birth: {DOB}</h5>
            <h5>Current Age: {age}</h5>
            <h5>Role: {role}</h5>
            <h5>Playing Style: {style}</h5>
            <h5>Jersey No: {jersey}</h5>
            <h5>Salary: {salary} USD</h5>
            <button className="btn btn-secondary">Select Player</button>
           
        </div>
    );
};

export default Player;