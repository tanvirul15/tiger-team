import React from 'react';
import "./Dashboard.css"

const Dashboard = (props) => {
    let salary=0;
    props.selectedPlayer.forEach(player=>{
        salary+=parseInt(player.salary);
    });
    return (
        <div id="dashboard">
            <h5 >No of Players: {props.selectedPlayer.length}</h5>
            <h5>Total Salary: {salary}$ </h5>
        </div>
    );
};

export default Dashboard;