import Card from "react-bootstrap/Card";

import { Col } from "react-bootstrap";
const UpcomingCard = (props) => {
  const date = props.movie.releaseDate.slice(0, 10);

  return (
    <div>
      <Col xs={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.movie.img} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>
              {props.movie.description} <br></br> <strong>Cast : </strong>
              {props.movie.actors} <br></br> <strong>Director: </strong>
              {props.movie.director}
              <br></br> Release Date: {date}
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </Col>
    </div>
  );
};

export default UpcomingCard;
