import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Repo from "./components/Repo";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route path="/explore" exact component={Repo} />
      </Router>
      {/* <Repo /> */}
    </div>
  );
}

export default App;
