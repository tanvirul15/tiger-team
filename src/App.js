import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import players from "./players/players.json";

function App() {
  console.log(players);
  return (
    <div className='App'>
      <Navbar />
      <Footer />

      <div className='container'>
        <div className='row'>
          <div className='col-8'>
            <h1>Select Players</h1>
          </div>
          <div className='col-4'>
            <h1>Selected Team</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
