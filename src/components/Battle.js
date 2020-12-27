import React, { useState } from "react";
import { Form, Row, Col, Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Battle = () => {
  const [playerOneSubmit, setPlayerOneSubmit] = useState(false);
  const [playerTwoSubmit, setPlayerTwoSubmit] = useState(false);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerOneData, setPlayerOneData] = useState({});
  const [playerTwoData, setPlayerTwoData] = useState({});
  //function

  const getData = (username) => {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    setPlayerOneSubmit(true);
    getData(playerOne).then((res) => setPlayerOneData(res));
  };

  const handleSecondSubmit = (e) => {
    e.preventDefault();
    setPlayerTwoSubmit(true);
    getData(playerTwo).then((res) => setPlayerTwoData(res));
  };
  const handleReset = (e) => {
    console.log(e.target.id);
    if (e.target.id === "player-one") {
      setPlayerOneSubmit(false);
      setPlayerOne("");
    } else {
      setPlayerTwoSubmit(false);
      setPlayerTwo("");
    }
  };

  return (
    <Container>
      <h1 className="grid">Battle</h1>
      <Row>
        {playerOneSubmit ? (
          <Col lg={6} sm={12} key={playerOneData.id}>
            <Card className="my-3 box">
              <Card.Img
                style={{
                  borderRadius: "55%",
                  width: "12rem",
                  marginTop: "1rem",
                }}
                variant="top"
                fluid
                src={playerOneData.avatar_url}
              />
              <Card.Body style={{ textAlign: "center", color: "white" }}>
                <Card.Title>
                  <i className="lni lni-user"></i>
                  <span> </span>
                  {playerOneData.name}
                </Card.Title>
                <Button id="player-one" variant="primary" onClick={handleReset}>
                  Reset
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <Col md={6} sm={12}>
            <Form onSubmit={handleFirstSubmit}>
              <Form.Control
                type="text"
                value={playerOne}
                onChange={(e) => {
                  setPlayerOne(e.target.value);
                }}
                placeholder="Player 1"
              />
              <Button
                type="submit"
                className="my-3"
                disabled={playerOne.length > 0 ? false : true}
                variant="outline-primary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        )}

        {playerTwoSubmit ? (
          <Col lg={6} sm={12} key={playerTwoData.id}>
            <Card className="my-3">
              <Card.Img
                style={{
                  borderRadius: "55%",
                  width: "12rem",
                  marginTop: "1rem",
                }}
                variant="top"
                src={playerTwoData.avatar_url}
              />
              <Card.Body style={{ textAlign: "center", color: "white" }}>
                <Card.Title>
                  <i className="lni lni-user"></i>
                  <span> </span>
                  {playerTwoData.name}
                </Card.Title>
                <Button id="player-two" variant="primary" onClick={handleReset}>
                  Reset
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <Col md={6} sm={12}>
            <Form onSubmit={handleSecondSubmit} className="button-battle">
              <Form.Control
                type="text"
                value={playerTwo}
                onChange={(e) => {
                  setPlayerTwo(e.target.value);
                }}
                placeholder="Player 2"
              />
              <Button
                type="submit"
                className="my-3"
                disabled={playerTwo.length > 0 ? false : true}
                variant="outline-primary"
              >
                Submit
              </Button>
            </Form>
          </Col>
        )}
      </Row>
      <div className="button-battle">
        {playerOneSubmit && playerTwoSubmit && (
          <Link
            to={{
              pathname: "/results",
              players: {
                firstPlayer: playerOneData,
                secondPlayer: playerTwoData,
              },
            }}
          >
            {" "}
            <Button>Battle</Button>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default Battle;
