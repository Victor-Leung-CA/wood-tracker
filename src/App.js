import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {BrowserRouter as HashRouter, Route} from 'react-router-dom';
import SearchPage from "./components/SearchPage"
import Sidebar from "./components/Sidebar"
import WoodSelection from "./components/WoodSelectionPage"

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Route path = "/" component = {Sidebar}/>
        <Route path = "/" exact component = {SearchPage}/>
        <Route path = "/wood-selection" exact component = {WoodSelection}/>
        
      </HashRouter>
    </div>
  );
}

export default App;
