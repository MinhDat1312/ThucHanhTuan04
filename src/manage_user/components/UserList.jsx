import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const { users, handleDeleteUser } = props;

    const deleteUser = (id) => {
        handleDeleteUser(id);
    };

    return (
        <Card className="p-3 mt-3">
            <h2 className="text-center font-weight-bold mb-3">Danh sách người dùng</h2>
            {users.length > 0 && (
                <ListGroup>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center font-weight-bold">
                        <div className="w-25 text-center">ID</div>
                        <div className="w-50 text-center">Tên người dùng</div>
                        <div className="w-25 text-center"></div>
                    </ListGroup.Item>
                    {users.map((user) => (
                        <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center">
                            <div className="w-25 text-center">{user.id}</div>
                            <Link to={`/user/${user.id}`} className="w-50 text-decoration-none text-center">
                                {user.name}
                            </Link>
                            <div className="w-25 text-center">
                                <Button variant="danger" className="px-4" onClick={() => deleteUser(user.id)}>
                                    Xóa
                                </Button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Card>
    );
};

export default UserList;
