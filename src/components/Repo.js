import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Card } from "react-bootstrap";
import { getRepos } from "./Api";

const Repo = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState("All");
  const language = ["All", "javascript", "react", "python", "golang"];
  const handleClicked = (e) => {
    setClicked(e.target.textContent);
    fetchData(e.target.textContent);
  };
  const fetchData = (text) => {
    setLoading(true);
    getRepos(text)
      .then(({ items }) => setRepositories(items))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchData(clicked);
  }, [clicked]);
  return (
    <>
      <h1 className="container">Explore</h1>
      <ul className="popular-navigation">
        {language.map((data, index) => {
          return (
            <li
              title={data}
              className={clicked === data ? "clicked" : ""}
              key={index}
              onClick={handleClicked}
            >
              {data}
            </li>
          );
        })}
      </ul>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid">
          {repositories.map((data) => (
            <Card style={{ width: "18rem" }} key={data.id} className="box">
              <Card.Img
                style={{
                  borderRadius: "55%",
                  width: "12rem",
                  marginTop: "1.2rem",
                }}
                variant="top"
                fluid
                src={data.owner.avatar_url}
              />
              <Card.Body style={{ color: "black" }}>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                  <i className="lni lni-user"></i>
                  <span> </span>
                  {data.full_name}
                </Card.Text>
                <Card.Text>
                  <i className="lni lni-star-filled"></i>
                  {data.stargazers_count}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default Repo;
