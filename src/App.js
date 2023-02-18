import React from "react";
import "./css/fontawesome.css"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/home"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
