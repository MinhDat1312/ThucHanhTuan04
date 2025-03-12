import React, { useEffect, useState, useContext } from 'react';
import { Container, Nav, Navbar, NavbarCollapse, Badge } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { TravelContext } from '../../TravelContext';
import styles from './Header.module.scss';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const loc = useLocation();
    const { cartItems } = useContext(TravelContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.querySelector(`.${styles.focusPage}`)?.focus();
    }, [loc.pathname]);

    return (
        <Navbar style={{ backgroundColor: '#003B95' }} variant="dark" expand="lg" fixed="top">
            <Container className="px-0">
                <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    Travel App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {['Home', 'About', 'Contact', 'Cart', 'Login'].map((item, index) => {
                            const isFocus = loc.pathname == (item === 'Home' ? '/' : `/${item}`);
                            return (
                                <Nav.Link
                                    key={index}
                                    as={NavLink}
                                    to={item === 'Home' ? '/' : `/${item}`}
                                    className={`${styles.nav_item} ${isFocus ? styles.focusPage : ''}`}
                                >
                                    <span style={{ position: 'relative' }}>
                                        {item == 'Cart' ? <FaShoppingCart size={20} /> : item}
                                        {item == 'Cart' && cartItems.length > 0 && (
                                            <Badge
                                                pill
                                                style={{
                                                    position: 'absolute',
                                                    top: '-8px',
                                                    right: '-10px',
                                                    backgroundColor: 'red',
                                                    color: 'white',
                                                    fontSize: '10px',
                                                    minWidth: '18px',
                                                    height: '18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {cartItems.length}
                                            </Badge>
                                        )}
                                    </span>
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
