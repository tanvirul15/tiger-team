import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import playersDB from "./playersDB/players.json"
import Player from "./components/Player/Player";

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      

    
        <div className='row'>
          <div className='col-8'>
            <div className="player-display-area">
              <h1 className="text-center bg-dark opacity-1">Players Profile</h1>
             
             {
               playersDB.map(player=><Player player={player} />)
             }
              


            </div>
          </div>
          <div className='col-4'>
            <div className="team-area">
            <h1 className="text-center bg-dark opacity-1">Selected Team</h1>
            </div>
          </div>
        </div>
      
      <Footer />
    </div>
  );
}

export default App;
