import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <div className={styles.hero}>
                <Container className="text-center">
                    <h1>Explore the World with Travel App</h1>
                    <p>Find your next adventure with ease</p>
                    <Button variant="primary" size="lg">
                        Get Started
                    </Button>
                </Container>
            </div>

            <Container className="my-5">
                <h2 className="text-center mb-4">Popular Destinations</h2>
                <Row>
                    {[
                        {
                            id: 1,
                            name: 'Paris',
                            img: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        },
                        {
                            id: 2,
                            name: 'Bali',
                            img: 'https://plus.unsplash.com/premium_photo-1668883189152-d771c402c385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        },
                        {
                            id: 3,
                            name: 'Tokyo',
                            img: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                        },
                    ].map((place) => (
                        <Col md={4} key={place.id} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={place.img} width={400} height={300} />
                                <Card.Body>
                                    <Card.Title>{place.name}</Card.Title>
                                    <Button variant="primary">Explore</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
