import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import playersDB from "./playersDB/players.json"
import Player from "./components/Player/Player";
import SelectedPlayer from "./components/SelectedPlayer/SelectedPlayer";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {

  //This function is to handle Select player button

  function handleSelectPlayer(player){
    if(selectedPlayer.includes(player)){
      alert("This Player Already Added..!")
      return;
    }
    const newPlayerList=[...selectedPlayer,player];
    setSelectedPlayer(newPlayerList);
  }

  function handleDeselectPlayer(player) {
    const newPlayerList=selectedPlayer.filter(item=>item!==player);
    setSelectedPlayer(newPlayerList);
    
  }

  //state for list of Players
  const [playerList,setPlayerList]=useState([]);
  //state for selected player
  const [selectedPlayer,setSelectedPlayer]=useState([]);

  useEffect(()=>{
    setPlayerList(playersDB);
  },[]);
 
  
  return (
    <div className='App'>
      <Navbar />
         
        <div className='row'>
          <div className='col-8'>
            <div className="player-display-area">
              <h1 className="text-center bg-dark opacity-1">Players Profile</h1>
             
             {
               playerList.map(player=><Player player={player} key={player.jersey} clickHandeler={handleSelectPlayer}/>)
             }

            </div>
          </div>
          <div className='col-4'>
            <div className="team-area">
            <h1 className="text-center bg-dark opacity-1">Selected Player</h1>
            <Dashboard selectedPlayer={selectedPlayer}/>
            {
               selectedPlayer.map(player=> <SelectedPlayer player={player} deselectHandeler={handleDeselectPlayer} key={player.jersey}/>)
             }
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default App;
