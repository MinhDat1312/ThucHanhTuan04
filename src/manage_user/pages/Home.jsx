import React, { useEffect, useRef, useState } from 'react';
import UserList from '../components/UserList';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

const Home = () => {
    const storageUsers = JSON.parse(localStorage.getItem('users')) || [];
    const [users, setUsers] = useState(storageUsers);

    const tenRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const handleAddUser = () => {
        const name = tenRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const age = ageRef.current.value;

        if (name && email && age) {
            const user = {
                id: Math.floor(Math.random() * 100),
                name: name,
                age: age,
                email: email,
            };
            setUsers([...users, user]);
            tenRef.current.value = '';
            emailRef.current.value = '';
            ageRef.current.value = '';
        } else {
            alert('Nhập thông tin người dùng');
        }
    };

    const handleDeleteUser = (id) => {
        const currentUsers = users.filter((user) => user.id != parseInt(id));
        setUsers(currentUsers);
    };

    return (
        <Container className="d-flex justify-content-center mt-4">
            <Card style={{ width: '40rem' }} className="p-4 shadow">
                <h1 className="text-center mb-4">Quản lý người dùng</h1>
                <Row className="mb-3">
                    <Col>
                        <Form.Control ref={tenRef} type="text" placeholder="Tên người dùng" />
                    </Col>
                    <Col>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" />
                    </Col>
                    <Col xs={3}>
                        <Form.Control ref={ageRef} type="number" placeholder="Tuổi" />
                    </Col>
                </Row>
                <Button onClick={handleAddUser} variant="primary" className="w-100 mb-3">
                    Thêm người dùng
                </Button>
                <UserList users={users} handleDeleteUser={handleDeleteUser} />
            </Card>
        </Container>
    );
};

export default Home;
