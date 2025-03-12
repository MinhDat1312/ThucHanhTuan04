import React, { useContext, useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Modal, Row, Toast } from 'react-bootstrap';
import styles from './Home.module.scss';
import ReactCountryFlag from 'react-country-flag';
import { TravelContext } from '../../TravelContext';

const Home = () => {
    const [show, setShow] = useState(false);
    const [check, setCheck] = useState(false);
    const [place, setPlace] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const { submitted, setSubmitted, cartItems, addToCart } = useContext(TravelContext);

    useEffect(() => {
        setTimeout(() => setSubmitted(false), 3000);
    }, []);

    const handleShow = (place) => {
        setShow(true);
        setPlace(place);
    };

    const handleHide = () => {
        setShow(false);
    };

    const handleAddToCart = (place) => {
        const isProductInCart = cartItems.some((item) => item.id === place.id);

        setShowToast(true);
        if (isProductInCart) {
            setCheck(false);
            setTimeout(() => setShowToast(false), 3000);
        } else {
            setCheck(true);
            addToCart(place);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return (
        <div className={styles.home}>
            {submitted && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10000,
                    }}
                >
                    <Toast onClose={() => setSubmitted(false)}>
                        <Toast.Header>
                            <strong className="me-auto text-success">Notify</strong>
                        </Toast.Header>
                        <Toast.Body className="bg-success text-white">Login success</Toast.Body>
                    </Toast>
                </div>
            )}

            {showToast && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10000,
                    }}
                >
                    <Toast onClose={() => setShowToast(false)}>
                        <Toast.Header>
                            <strong className="me-auto">Notification</strong>
                        </Toast.Header>
                        <Toast.Body className={`text-white ${check ? 'bg-success' : 'bg-warning'}`}>
                            {check ? 'Product is added' : 'This product is already in your cart!'}
                        </Toast.Body>
                    </Toast>
                </div>
            )}

            <Carousel style={{ marginLeft: '116px', marginRight: '130px' }} className="rounded-2">
                <Carousel.Item className="rounded-2">
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
                </Carousel.Item>{' '}
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
                            description:
                                'Paris, the capital of France, is one of the most famous cities in the world, attracting millions of tourists every year. Located along the romantic Seine River, it is known as the "City of Light" due to its magnificent beauty and flourishing cultural and artistic scene. Paris is renowned not only for its iconic landmarks such as the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum but also as a global fashion capital. With its mild climate, charming streets, quaint cafés, and exquisite cuisine, the city is an ideal destination. The people of Paris are known for their elegance and passion for the arts, contributing to a city that is both modern and historic, exuding an irresistible charm.',
                            price: 500,
                            color: 'linear-gradient(to right, blue, white, red)',
                        },
                        {
                            id: 2,
                            name: 'Bali',
                            img: 'https://plus.unsplash.com/premium_photo-1668883189152-d771c402c385?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            country: 'ID',
                            description:
                                'Bali, known as the "Island of the Gods," is a tropical paradise in Indonesia, famous for its stunning beaches, lush rice terraces, and sacred temples like Tanah Lot and Uluwatu. Rich in Hindu culture, the island is filled with vibrant ceremonies, traditional dances, and beautiful crafts. Visitors can enjoy surfing, diving, and trekking or explore the artistic town of Ubud. The island’s warm hospitality and delicious Balinese cuisine make every visit special. Whether seeking adventure or relaxation, Bali offers a perfect blend of nature, culture, and spirituality, leaving every traveler with unforgettable memories.',
                            price: 300,
                            color: 'linear-gradient(to right, red, white)',
                        },
                        {
                            id: 3,
                            name: 'Tokyo',
                            img: 'https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                            country: 'JP',
                            description:
                                'Tokyo, the capital of Japan, is a vibrant metropolis that seamlessly blends tradition and modernity. As one of the most populous cities in the world, Tokyo is known for its towering skyscrapers, cutting-edge technology, and bustling streets filled with neon lights. Despite its modern appeal, the city also preserves its rich cultural heritage, with historic temples like Senso-ji, traditional tea houses, and beautiful cherry blossom parks. Tokyo is a global hub for fashion, entertainment, and cuisine, offering everything from Michelin-starred restaurants to delicious street food. Whether exploring the trendy districts of Shibuya and Shinjuku or enjoying the peaceful atmosphere of the Imperial Palace gardens, visitors can experience the dynamic energy and unique charm that make Tokyo an unforgettable destination.',
                            price: 400,
                            color: 'linear-gradient(to left, red, white)',
                        },
                    ].map((place) => (
                        <Col md={4} key={place.id} className="mb-4">
                            <div
                                onClick={() => handleShow(place)}
                                style={{
                                    backgroundImage: `url(${place.img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    width: '400px',
                                    height: '300px',
                                    display: 'flex',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    cursor: 'pointer',
                                }}
                                className={styles.image}
                            >
                                <ReactCountryFlag
                                    countryCode={place.country}
                                    svg
                                    style={{
                                        width: '2em',
                                        height: '2em',
                                    }}
                                    title={place.country}
                                    className="ms-2 mt-1"
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        left: '55px',
                                        width: '300px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <h2 className="mb-0">{place.name}</h2>
                                    <div className="d-flex align-items-center">
                                        <span className="fs-4 ms-4 me-2">{place.price}$</span>
                                        <Button
                                            variant="primary"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleAddToCart(place);
                                            }}
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            {place != null && (
                <Modal show={show} onHide={handleHide} centered size="xl">
                    <Modal.Header className="border-0" closeButton style={{ background: `${place.color}` }}>
                        <Modal.Title className="fs-3">
                            {place.name}
                            <ReactCountryFlag
                                countryCode={place.country}
                                svg
                                style={{
                                    width: '1.5em',
                                    height: '1.5em',
                                }}
                                title={place.country}
                                className="ms-2"
                            />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center d-flex border-0" style={{ background: `${place.color}` }}>
                        <img
                            src={place.img}
                            alt={place.name}
                            style={{ width: '50%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
                            className="shadow-lg"
                        />
                        <div className="mt-3 mx-3">
                            <h3>Introduction</h3>
                            <p style={{ textAlign: 'justify' }}>{place.description}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="border-0" style={{ background: `${place.color}` }}></Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default Home;
