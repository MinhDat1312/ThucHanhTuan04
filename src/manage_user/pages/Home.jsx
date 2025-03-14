import React, { useContext, useEffect, useRef, useState } from 'react';
import UserList from '../components/UserList';
import { Button, Card, Col, Container, Form, Row, Toast } from 'react-bootstrap';
import { UserConText } from '../UserConText';

const Home = () => {
    const { users, setUsers, submit, setSubmit, state, setState } = useContext(UserConText);
    const tenRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();

    const handleAddUser = () => {
        setSubmit(true);

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
            setState(1);
        } else {
            setState(0);
        }

        setTimeout(() => setSubmit(false), 3000);
    };

    const handleDeleteUser = (id) => {
        const currentUsers = users.filter((user) => user.id != parseInt(id));
        setUsers(currentUsers);
        setSubmit(true);
        setState(2);
        setTimeout(() => setSubmit(false), 3000);
    };

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <Container className="d-flex justify-content-center mt-4">
            {submit && (
                <div
                    style={{
                        position: 'fixed',
                        top: '0%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10000,
                    }}
                >
                    <Toast onClose={() => setSubmit(false)}>
                        <Toast.Header>
                            <strong
                                className={`me-auto ${
                                    state == 1 || state == 2 || state == 3
                                        ? 'text-success'
                                        : state == 0
                                        ? 'text-danger'
                                        : ''
                                }`}
                            >
                                Notify
                            </strong>
                        </Toast.Header>
                        <Toast.Body
                            className={`text-white ${
                                state == 1 || state == 2 || state == 3 ? 'bg-success' : state == 0 ? 'bg-danger' : ''
                            }`}
                        >
                            {state == 1
                                ? 'Thêm thành công'
                                : state == 0
                                ? 'Nhập thông tin người dùng'
                                : state == 2
                                ? 'Xóa thành công'
                                : 'Cập nhật thành công'}
                        </Toast.Body>
                    </Toast>
                </div>
            )}
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
