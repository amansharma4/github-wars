import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <h2> Github Battle</h2>
      <Link className="button" variant="primary" to="/battle">
        <Button variant="primary">Battle</Button>{" "}
      </Link>
    </div>
  );
};

export default Home;
