import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import { BrowserRouter,Link } from "react-router-dom";

const ListingsCard = (props) => {
  return (
    <div>
      <Col xs={4}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={props.movie.img} />
          <Card.Body>
            <Card.Title>{props.movie.title}</Card.Title>
            <Card.Text>{props.movie.description}</Card.Text>
            <Button variant="primary" id="listingTimeBTN" as ={Link} to = {"/booking"}  >
              Book Now 
            </Button>
            <br></br>
            <br></br>
          
  
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </Col>
    </div>
  );
};

export default ListingsCard;