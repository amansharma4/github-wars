import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to="/battle">Battle</Link>
      <Link to="/explore">Popular Repo</Link>
      <Link to="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Navigation;
