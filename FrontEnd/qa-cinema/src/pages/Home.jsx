import { Carousel } from "react-bootstrap";
import { Card } from "react-bootstrap";
import "../resources/css/style.css";

const Home = () => {
    return (
        <div id="Homebody" >


            <h2>Home</h2>
            <p> Welcome to QA Cinemas the UK's Number 1 cinema!  </p>

            <Carousel id="featuredCaro">
                <Carousel.Item>



                    <Card>
                        <Card.Img variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text >
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>


                <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src=" https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png" />
                        <Card.Body id="featuredCaro">
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Carousel.Item>
            </Carousel>
        </div>


    );
}

export default Home;