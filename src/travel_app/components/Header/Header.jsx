import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavbarCollapse } from 'react-bootstrap';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    const loc = useLocation();
    useEffect(() => {
        document.querySelector(`.${styles.focusPage}`)?.focus();
    }, [loc.pathname]);

    const navigate = useNavigate();

    return (
        <Navbar style={{ backgroundColor: '#003B95' }} variant="dark" expand="lg" fixed="top">
            <Container className="px-0">
                <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    Travel App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        {['Home', 'About', 'Contact', 'Login'].map((item, index) => {
                            const isFocus = loc.pathname == (item == 'Home' ? '/' : `/${item}`);
                            return (
                                <Nav.Link
                                    key={index}
                                    as={NavLink}
                                    to={item == 'Home' ? '/' : `/${item}`}
                                    className={`${styles.nav_item} ${isFocus ? styles.focusPage : ''}`}
                                >
                                    {item}
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
