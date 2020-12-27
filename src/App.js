import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Repo from "./components/Repo";
import Home from "./components/Home";
import Battle from "./components/Battle";
import Result from "./components/Result";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/battle" exact component={Battle} />
        <Route path="/explore" exact component={Repo} />
        <Route path="/results" exact component={Result} />
      </Router>
    </div>
  );
}

export default App;
