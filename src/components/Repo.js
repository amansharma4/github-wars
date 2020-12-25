import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Card, Col, Container, Row } from "react-bootstrap";

const Repo = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  //function
  const getRepo = (language) => {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
      )
        .then((res) => res.json())
        .then((data) => resolve(data));
    });
  };
  useEffect(() => {
    getRepo("react")
      .then(({ items }) => setRepositories(items))
      .then(() => setLoading(false));
  }, []);
  return (
    <>
      <h1>Explore</h1>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {repositories.map((item) => (
              <Col lg={4} sm={10}>
                <Card className="my-2">
                  <Card.Img
                    variant="top"
                    src={item.owner.avatar_url}
                    style={{ width: "10rem" }}
                  />
                  <Card.Body>
                    <h1>{item.name}</h1>
                    <p>
                      <i class="lni lni-user"></i>
                      {item.full_name}
                    </p>
                    <p>
                      <i class="lni lni-star-filled"></i>
                      {item.stargazers_count}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Repo;
