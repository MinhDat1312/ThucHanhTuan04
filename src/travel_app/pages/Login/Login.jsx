import React, { useContext, useRef, useState } from 'react';
import { Form, Button, Container, Card, Alert, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';
import { TravelContext } from '../../TravelContext';

const Login = () => {
    const [formLogin, setFormLogin] = useState({
        username: '',
        passwordLogin: '',
    });
    const containerRef = useRef();
    const navigate = useNavigate();
    const { submitted, setSubmitted, stateButton, setStateButton } = useContext(TravelContext);

    const handleLogin = (e) => {
        e.preventDefault();
        setStateButton(true);
        if (formLogin.username != '' && formLogin.passwordLogin != '') {
            navigate('/');
            setSubmitted(true);
            setStateButton(false);
        } else {
            setSubmitted(false);
            setTimeout(() => setStateButton(false), 3000);
        }
    };

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setFormLogin({ ...formLogin, [name]: value });
    };

    const handleChangeSignUp = () => {
        if (containerRef.current) {
            containerRef.current.classList.add(styles.active);
        }
    };

    const handleChangeSignIn = () => {
        if (containerRef.current) {
            containerRef.current.classList.remove(styles.active);
        }
    };

    return (
        <div
            className="py-5 mt-5"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {stateButton && !submitted && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10000,
                    }}
                >
                    <Toast onClose={() => setStateButton(false)}>
                        <Toast.Header>
                            <strong className="me-auto text-danger">Notify</strong>
                        </Toast.Header>
                        <Toast.Body className="bg-danger text-white">Login failed</Toast.Body>
                    </Toast>
                </div>
            )}
            <Container ref={containerRef} className={styles.loginContainer}>
                <Card className={styles.loginCard}>
                    <Card.Body>
                        <h2 className="text-center mb-4">SIGN IN</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group controlId="username" className="mb-3">
                                <Form.Control
                                    type="text"
                                    name="username"
                                    value={formLogin.username}
                                    placeholder="Username"
                                    onChange={handleChangeLogin}
                                />
                            </Form.Group>
                            <Form.Group controlId="passwordLogin" className="mb-3">
                                <Form.Control
                                    type="password"
                                    name="passwordLogin"
                                    value={formLogin.passwordLogin}
                                    placeholder="Password"
                                    onChange={handleChangeLogin}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                LOGIN
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <Card className={styles.signupCard}>
                    <Card.Body>
                        <h2 className="text-center mb-4">SIGN UP</h2>
                        <Form>
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Control type="text" name="name" placeholder="Name" required />
                            </Form.Group>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Control type="email" name="email" placeholder="Email" required />
                            </Form.Group>
                            <Form.Group controlId="passwordSignUp" className="mb-3">
                                <Form.Control type="password" name="passwordSignUp" placeholder="Password" required />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="w-100">
                                SIGN UP
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className={styles.toggle_container}>
                    <div className={styles.toggle}>
                        <div className={`${styles.toggle_panel} ${styles.toggle_left}`}>
                            <h1>Welcome Back!</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <Button onClick={handleChangeSignIn} variant="primary" type="submit">
                                SIGN IN
                            </Button>
                        </div>
                        <div className={`${styles.toggle_panel} ${styles.toggle_right}`}>
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <Button onClick={handleChangeSignUp} variant="primary" type="submit">
                                SIGN UP
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;
