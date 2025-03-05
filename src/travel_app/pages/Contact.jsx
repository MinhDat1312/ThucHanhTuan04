import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert, Card, Toast } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(
            () =>
                setFormData({
                    fname: '',
                    lname: '',
                    email: '',
                    phone: '',
                    message: '',
                }),
            0,
        );
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <Container className="my-5 pt-5 mx-auto">
            <Row className="justify-content-md-center">
                <Col className="shadow-lg rounded-2 me-3">
                    <h2 className="text-center text-primary my-3">Contact Us</h2>

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
                                <Toast.Body className="bg-success text-white">
                                    We will contact you as soon as possible
                                </Toast.Body>
                            </Toast>
                        </div>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formFname">
                                <Form.Label className="fw-bold text-primary">First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your first name"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formLname">
                                <Form.Label className="fw-bold text-primary">Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Your last name"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formEmail">
                                <Form.Label className="fw-bold text-primary">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} className="mb-3" controlId="formPhone">
                                <Form.Label className="fw-bold text-primary">Phone</Form.Label>
                                <Form.Control
                                    type="tel"
                                    pattern="[0-9]{10,15}"
                                    placeholder="Enter your phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label className="fw-bold text-primary">Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Enter your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Row>
                        <Card style={{ backgroundColor: '#003B95' }}>
                            <Card.Body>
                                <Card.Title style={{ fontSize: '32px' }} className="text-center text-white">
                                    Contact Info
                                </Card.Title>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="d-flex justify-content-start">
                                            <div
                                                className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
                                                style={{ width: '30px', height: '30px' }}
                                            >
                                                <i className="bi bi-geo-alt-fill"></i>
                                            </div>
                                            <p className="ms-2 text-white fs-6 fw-bold">Ho Chi Minh city, VietNam</p>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <div
                                                className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
                                                style={{ width: '30px', height: '30px' }}
                                            >
                                                <i class="bi bi-envelope-fill"></i>
                                            </div>
                                            <p className="ms-2 text-white fs-6 fw-bold">daihoccongnghiep@gmail.com</p>
                                        </div>
                                        <div className="d-flex justify-content-start">
                                            <div
                                                className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
                                                style={{ width: '30px', height: '30px' }}
                                            >
                                                <i class="bi bi-telephone-fill"></i>
                                            </div>
                                            <p className="ms-2 text-white fs-6 fw-bold">0987654321</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link to={'https://www.facebook.com/'} className="text-decoration-none">
                                            <div className="d-flex justify-content-start">
                                                <div
                                                    className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
                                                    style={{ width: '30px', height: '30px' }}
                                                >
                                                    <i class="bi bi-facebook"></i>
                                                </div>
                                                <p className="ms-2 text-white fs-6 fw-bold">Facebook</p>
                                            </div>
                                        </Link>
                                        <Link to={'https://www.instagram.com/'} className="text-decoration-none">
                                            <div className="d-flex justify-content-start">
                                                <div
                                                    className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
                                                    style={{ width: '30px', height: '30px' }}
                                                >
                                                    <i class="bi bi-instagram"></i>
                                                </div>
                                                <p className="ms-2 text-white fs-6 fw-bold">Instagram</p>
                                            </div>
                                        </Link>
                                        <Link to={'https://www.twitter.com/'} className="text-decoration-none">
                                            <div className="d-flex justify-content-start">
                                                <div
                                                    className="d-flex justify-content-center align-items-center rounded-circle bg-primary text-white"
                                                    style={{ width: '30px', height: '30px' }}
                                                >
                                                    <i class="bi bi-twitter-x"></i>
                                                </div>
                                                <p className="ms-2 text-white fs-6 fw-bold">Twitter</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="mt-3">
                        <div className="p-0">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8582379826526!2d106.68427047462788!3d10.822158889329419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174deb3ef536f31%3A0x8b7bb8b7c956157b!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2hp4buHcCBUUC5IQ00!5e0!3m2!1svi!2s!4v1741172834805!5m2!1svi!2s"
                                className="rounded-2"
                                width={652}
                                height={230}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
