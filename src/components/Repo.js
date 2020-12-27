import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { Card } from "react-bootstrap";

const Repo = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState("All");

  const language = ["All", "javascript", "react", "python", "golang"];

  const handleClicked = (e) => {
    // console.log(e.target.textContent);
    setClicked(e.target.textContent);
    fetchData(e.target.textContent);
  };
  const fetchData = (text) => {
    setLoading(true);
    getRepo(text)
      .then(({ items }) => setRepositories(items))
      .then(() => setLoading(false));
  };
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
    fetchData(clicked);
  }, [clicked]);
  return (
    <>
      <h1 className="container">Explore</h1>
      <ul className="popular-navigation">
        {language.map((item, index) => {
          return (
            <li
              title={item}
              className={clicked === item ? "clicked" : ""}
              key={index}
              onClick={handleClicked}
            >
              {item}
            </li>
          );
        })}
      </ul>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid">
          {repositories.map((item) => (
            <Card style={{ width: "18rem" }} key={item.id} className="box">
              <Card.Img
                style={{
                  borderRadius: "55%",
                  width: "12rem",
                  marginTop: "1.2rem",
                }}
                variant="top"
                fluid
                src={item.owner.avatar_url}
              />
              <Card.Body style={{ color: "black" }}>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  <i className="lni lni-user"></i>
                  <span> </span>
                  {item.full_name}
                </Card.Text>
                <Card.Text>
                  <i className="lni lni-star-filled"></i>
                  {item.stargazers_count}
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
