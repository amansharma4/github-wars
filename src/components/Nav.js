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
    <div class="topnav" id="myTopnav">
      <Link to="/">Home</Link>
      <Link to="/">Battle</Link>
      <Link to="/explore">Popular Repo</Link>
      <Link to="javascript:void(0);" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </Link>
    </div>
  );
};

export default Navigation;
