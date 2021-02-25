import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes} from "./routes/Routes";
import {Header} from "./components/Header/Header";

const App = () => {
  return (
      <HashRouter>
        <div className="App">
            <Header />
            <Routes />
        </div>
      </HashRouter>
  );
}

export default App;
