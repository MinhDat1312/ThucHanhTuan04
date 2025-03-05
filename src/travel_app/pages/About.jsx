import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div
                className="pt-5"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} className="my-5">
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
            <Container className="my-5">
                <Row>
                    <Col md={4}>
                        <Card className="shadow-lg">
                            <Card.Img
                                width={400}
                                height={300}
                                variant="top"
                                src="https://plus.unsplash.com/premium_photo-1663076518116-0f0637626edf?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                            <Card.Body>
                                <Card.Title>Easy Ticket Booking</Card.Title>
                                <Card.Text>
                                    A fast and convenient booking system integrated with multiple airlines and hotels.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-lg">
                            <Card.Img
                                width={400}
                                height={300}
                                variant="top"
                                src="https://media.istockphoto.com/id/618545122/vi/anh/chi-ph%C3%AD-%C4%91i-l%E1%BA%A1i.jpg?s=1024x1024&w=is&k=20&c=IUb9jx5U0jq4z83bSarAYqY9oXB3NwDrm9R7I2TlWao="
                            />
                            <Card.Body>
                                <Card.Title>Best Deals</Card.Title>
                                <Card.Text>Stay updated with the hottest deals and save more on your trips.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadow-lg">
                            <Card.Img
                                width={400}
                                height={300}
                                variant="top"
                                src="https://media.istockphoto.com/id/1372960036/vi/anh/24-24-m%C3%A0u-xanh-tr%C3%AAn-b%C3%A0n-ph%C3%ADm-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=qjkoD0mW6n339u8XLYvd-BibZPqHV4j8JshFMoYtf28="
                            />
                            <Card.Body>
                                <Card.Title>24/7 Support</Card.Title>
                                <Card.Text>Our support team is always ready to assist you in any situation.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
