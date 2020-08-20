import React from 'react';
import './App.css';
import Fragebogen from './Fragebogen/Fragebogen'
import Phone from './Fragebogen/iPhone.png'

function App() {
  return (
    <div className="App">
        <div className="FragebogenContainer">
            <img src={Phone} className="Phone"/>
            <Fragebogen className="Fragebogen"/>

        </div>


    </div>
  );
}

export default App;
