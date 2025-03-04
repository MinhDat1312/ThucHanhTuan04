import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
                    name: '',
                    email: '',
                    message: '',
                }),
            0,
        );
        setTimeout(() => setSubmitted(false), 3000);
    };

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
            <Container className="my-3">
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        <h2 className="text-center">Contact Us</h2>

                        {submitted && (
                            <Alert variant="success">Gửi thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.</Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label className="fw-bold text-black">Họ và Tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập họ tên"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label className="fw-bold text-black">Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Nhập email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label className="fw-bold text-black">Tin nhắn</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Nhập nội dung liên hệ"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Gửi liên hệ
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;
