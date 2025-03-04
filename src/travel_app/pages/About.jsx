import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <div
            className="py-5"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card className="shadow-lg p-4 border-0">
                            <Card.Body>
                                <h2 className="text-center text-primary">About Us</h2>
                                <p className="mt-3 text-muted">
                                    Welcome to Travel App! We are passionate about making your travel experiences
                                    seamless and unforgettable. Whether you're looking for adventure, relaxation, or
                                    cultural exploration, we have the perfect destinations and guides for you.
                                </p>
                                <p className="text-muted">
                                    Our mission is to provide the best travel recommendations and services, ensuring
                                    that you enjoy every moment of your journey. Join us and explore the world with
                                    confidence!
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
