import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from './Home.module.scss';
import ReactCountryFlag from 'react-country-flag';

const Home = () => {
    return (
        <div className={styles.home}>
            <Carousel style={{ marginLeft: '116px', marginRight: '130px' }} className='rounded-2'>
                <Carousel.Item className='rounded-2'>
                    <img
                        className="w-100 rounded-2"
                        height={500}
                        src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ></img>
                    <Carousel.Caption className="text-white fw-bolder">
                        <h1>Booking Home</h1>
                        <h3>Find hotel deals, home stays, and more</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 rounded-2"
                        height={500}
                        src="https://images.unsplash.com/photo-1617857995575-d102f16fd3e7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ></img>
                    <Carousel.Caption className="text-white fw-bolder">
                        <h1>Booking Plane</h1>
                        <h3>Find deals on domestic and international flights</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100 rounded-2"
                        height={500}
                        src="https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    ></img>
                    <Carousel.Caption className="text-white fw-bolder">
                        <h1>Booking Car</h1>
                        <h3>Travel more, spend les.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="my-3">
                <h2 className="text-center mb-3" style={{ color: '#003B95' }}>
                    Popular Destinations
                </h2>
                <Row>
                    {[
                        {
                            id: 1,
                            name: 'Paris',
                            img: 'https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            country: 'FR',
                        },
                        {
                            id: 2,
                            name: 'Bali',
                            img: 'https://plus.unsplash.com/premium_photo-1668883189152-d771c402c385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            country: 'ID',
                        },
                        {
                            id: 3,
                            name: 'Tokyo',
                            img: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            country: 'JP',
                        },
                    ].map((place) => (
                        <Col md={4} key={place.id} className="mb-4">
                            <div
                                style={{
                                    backgroundImage: `url(${place.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '400px',
                                    height: '300px',
                                }}
                                className="rounded-2 d-flex"
                            >
                                <h2 style={{ textShadow: '2px 2px 5px #003B95', color: 'white' }} className="ms-2">
                                    {place.name}
                                </h2>
                                <ReactCountryFlag
                                    countryCode={place.country}
                                    svg
                                    style={{
                                        width: '2em',
                                        height: '2em',
                                    }}
                                    title={place.country}
                                    className='ms-2 mt-1'
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Home;
