import React, { useContext, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { TravelContext } from '../TravelContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const orders = localStorage.getItem('orderTravels') ? JSON.parse(localStorage.getItem('orderTravels')) : [];
    const { cartItems, setCartItems, formatDateTime } = useContext(TravelContext);
    const navigate = useNavigate();

    const [quantities, setQuantities] = useState({});
    const [luggageWeights, setLuggageWeights] = useState({});
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [currentPlace, setCurrentPlace] = useState(null);
    const [userInfo, setUserInfo] = useState({ name: '', departureDate: '', returnDate: '' });
    const [confirmedOrders, setConfirmedOrders] = useState(orders);

    useEffect(() => {
        localStorage.setItem('orderTravels', JSON.stringify(confirmedOrders));
    }, [confirmedOrders]);

    const handleRemoveItem = (placeId) => {
        const updatedCart = cartItems.filter((item) => item.id !== placeId);
        setCartItems(updatedCart);
    };

    const handleQuantityChange = (placeId, quantity) => {
        setQuantities((prev) => ({
            ...prev,
            [placeId]: quantity,
        }));
    };

    const handleLuggageWeightChange = (placeId, weight) => {
        setLuggageWeights((prev) => ({
            ...prev,
            [placeId]: weight,
        }));
    };

    const calculateLuggageCost = (weight) => {
        if (weight === '2.5') return 5;
        if (weight === '7') return 10;
        if (weight === '10') return 25;
        return 0;
    };

    const handleCheckout = (place) => {
        const today = new Date();
        const returnDate = new Date(today);
        returnDate.setDate(today.getDate() + 5);

        setUserInfo({
            ...userInfo,
            departureDate: today.toISOString().split('T')[0],
            returnDate: returnDate.toISOString().split('T')[0],
        });

        setCurrentPlace(place);
        setShowCheckoutModal(true);
    };

    const handleConfirmOrder = () => {
        if (userInfo.name == '') {
            alert('Please enter your info');
            return;
        }
        const orderDetails = {
            id: Date.now(),
            name: userInfo.name,
            departureDate: userInfo.departureDate,
            returnDate: userInfo.returnDate,
            placeName: currentPlace.name,
            quantity: quantities[currentPlace.id] || 1,
            luggageWeight: luggageWeights[currentPlace.id] || '0',
            price:
                currentPlace.price * (quantities[currentPlace.id] || 1) +
                calculateLuggageCost(luggageWeights[currentPlace.id] || '0'),
        };

        setConfirmedOrders([...confirmedOrders, orderDetails]);
        alert('Your order has been confirmed!');
        setShowCheckoutModal(false);
        setUserInfo({ name: '', departureDate: '', returnDate: '' });
        setQuantities({});
        setLuggageWeights({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => {
            const updatedUserInfo = { ...prev, [name]: value };

            if (name === 'departureDate') {
                const departureDate = new Date(value);
                const returnDate = new Date(departureDate);
                returnDate.setDate(departureDate.getDate() + 5);
                updatedUserInfo.returnDate = returnDate.toISOString().split('T')[0];
            }

            return updatedUserInfo;
        });
    };

    return (
        <Container className="my-5">
            <h2 className="text-center mb-4" style={{ color: '#003B95' }}>
                <br />
                Your Booking
            </h2>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <h4>Your cart is empty</h4>
                    <Button onClick={() => navigate('/')} variant="primary">
                        Continue booking
                    </Button>
                </div>
            ) : (
                <div>
                    <Row>
                        {cartItems.map((place) => {
                            const quantity = quantities[place.id] || 1;
                            const luggageWeight = luggageWeights[place.id] || '0';
                            const luggageCost = calculateLuggageCost(luggageWeight);
                            const totalPriceForItem = place.price * quantity + luggageCost;

                            return (
                                <Col md={12} key={place.id} className="mb-4">
                                    <Card>
                                        <Card.Body>
                                            <div className="d-flex text-center">
                                                <img
                                                    src={place.img}
                                                    alt={place.name}
                                                    style={{
                                                        width: '25%',
                                                        height: '300px',
                                                        objectFit: 'cover',
                                                        borderRadius: '12px',
                                                    }}
                                                    className="shadow-lg"
                                                />
                                                <div className="ms-2">
                                                    <Card.Title>{place.name}</Card.Title>
                                                    <Card.Text style={{ textAlign: 'justify' }}>
                                                        {place.description}
                                                    </Card.Text>
                                                </div>
                                            </div>
                                            <Form.Group
                                                controlId={`quantity-luggage-${place.id}`}
                                                className="my-2"
                                                style={{ display: 'flex', justifyContent: 'space-between' }}
                                            >
                                                <div style={{ width: '45%' }}>
                                                    <Form.Label>Number of People</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        value={quantities[place.id] || 1}
                                                        onChange={(e) => handleQuantityChange(place.id, e.target.value)}
                                                        min="1"
                                                    />
                                                </div>
                                                <div style={{ width: '45%' }}>
                                                    <Form.Label>Luggage Weight (kg)</Form.Label>
                                                    <Form.Control
                                                        as="select"
                                                        value={luggageWeights[place.id] || '0'}
                                                        onChange={(e) =>
                                                            handleLuggageWeightChange(place.id, e.target.value)
                                                        }
                                                    >
                                                        <option value="0">Select</option>
                                                        <option value="2.5">2.5 kg (5$)</option>
                                                        <option value="7">7 kg (10$)</option>
                                                        <option value="10">10 kg (25$)</option>
                                                    </Form.Control>
                                                </div>
                                            </Form.Group>

                                            <div className="my-2 d-flex justify-content-end">
                                                <Button variant="success" onClick={() => handleCheckout(place)}>
                                                    Proceed to Checkout
                                                </Button>
                                                <Button
                                                    style={{ marginLeft: '30px' }}
                                                    variant="danger"
                                                    onClick={() => handleRemoveItem(place.id)}
                                                >
                                                    Remove from Cart
                                                </Button>
                                            </div>
                                            <h4 className="text-success text-end">${totalPriceForItem}</h4>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </div>
            )}

            {currentPlace && (
                <Modal show={showCheckoutModal} onHide={() => setShowCheckoutModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Checkout for {currentPlace.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={userInfo.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="departureDate" className="mb-3">
                                <Form.Label>Departure Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="departureDate"
                                    value={userInfo.departureDate}
                                    onChange={handleInputChange}
                                    min={userInfo.departureDate}
                                />
                            </Form.Group>

                            <Form.Group controlId="returnDate" className="mb-3">
                                <Form.Label>Return Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="returnDate"
                                    value={userInfo.returnDate}
                                    onChange={handleInputChange}
                                    min={userInfo.departureDate}
                                />
                            </Form.Group>

                            <h5>Booking Details</h5>
                            <p>Place: {currentPlace.name}</p>
                            <p>Quantity: {quantities[currentPlace.id] || 1}</p>
                            <p>Luggage Weight: {luggageWeights[currentPlace.id] || '0'} kg</p>
                            <p>
                                <strong>
                                    Price: $
                                    {currentPlace.price * (quantities[currentPlace.id] || 1) +
                                        calculateLuggageCost(luggageWeights[currentPlace.id] || '0')}
                                </strong>
                            </p>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowCheckoutModal(false)}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleConfirmOrder}>
                            Confirm Order
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}

            <div className="my-3 text-center" style={{ color: '#003B95' }}>
                <h2>Confirmed Orders</h2>
                {confirmedOrders.length === 0 ? (
                    <p>No orders confirmed yet.</p>
                ) : (
                    <Row style={{ paddingInline: '8px' }} className='justify-content-between gap-3'>
                        {confirmedOrders.map((order, index) => (
                            <Card
                                as={Col}
                                md={4}
                                key={order.id}
                                className={`mb-2 p-2 ${index + (1 % 3) == 0 ? '' : 'me-2'}`}
                                style={{ width: '350px' }}
                            >
                                <Card.Body className="p-0 d-flex flex-column justify-content-center align-items-start">
                                    <h5 className="text-primary">Order ID: {order.id}</h5>
                                    <strong className="text-primary">{order.name}</strong>
                                    <strong className="text-primary">{order.placeName}</strong>
                                    <span>
                                        Departure: {order.departureDate}, Return: {order.returnDate}
                                    </span>
                                    <span>
                                        Quantity: {order.quantity}, Luggage Weight: {order.luggageWeight} kg
                                    </span>
                                    <span className='text-success'>Price: ${order.price}</span>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                )}
            </div>
        </Container>
    );
};

export default Cart;
