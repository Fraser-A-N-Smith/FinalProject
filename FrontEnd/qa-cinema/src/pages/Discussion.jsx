import React from "react";
import "../resources/css/discussion.css";
import { Card, Row, Col, Dropdown, Form } from "react-bootstrap";

import { useState, useEffect } from "react";

import axios from "axios";
import DiscussionCard from "./components/DiscussionCard";
import Pagination from "./components/Pagination";
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const Discussion = () => {
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);
  const [movieList, setMovieList] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:6969/watchAll")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        setError(error);
      });
    axios
      .get("http://localhost:6969/getAllComments")
      .then((response) => {
        setDiscussions(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentMovies = movieList.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="Discussion">
      <div className="container">
        <h1 class="discText">Discussion</h1>
        <Row>
          {currentMovies.map((movie) => (
            <DiscussionCard movie={movie} discussion={discussions} />
          ))}
        </Row>
      </div>
      <div style={styles.container}>
        <h2>Leave a review</h2>
      </div>
      <Pagination
        cardsPerPage={cardsPerPage}
        totalMovies={movieList.length}
        paginate={paginate}
      />
      <div className="forumtitle col">
        <h2 class="discText fw-bold">
          General Forum (use this star system to rate our cinema)
        </h2>
      </div>

      <div className="erm">
        <DiscussionCard
          movie={{
            _id: "general",
            title: "How was your experience",
            img: "https://i.ibb.co/fCsstCb/QA-Logo-Turquoise.png",
          }}
          discussion={discussions}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300,
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 100,
    padding: 10,
  },
  card: {
    width: "90%",
    maxWidth: "400px",
    padding: "5rem 2.5rem",
    borderRadius: "1rem",
    border: "1px solid transparent",
    backdropFilter: "blur(1rem)",
    borderTopColor: "rgba(225, 225, 225, 0.5)",
    borderBottomColor: "rgba(225, 225, 225, 0.5)",
    borderLeftColor: "rgba(225, 225, 225, 0.5)",
    borderRightColor: "rgba(225, 225, 225, 0.5)",
  },
  erm: {
    backgroundColor: "rgba(225, 225, 225, 0.1)",
  },
};
export default Discussion;
