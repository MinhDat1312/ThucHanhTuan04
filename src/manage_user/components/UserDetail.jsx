import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const UserDetail = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    
    const { id } = useParams();
    const user = users.find((user) => user.id == parseInt(id));

    const navigate = useNavigate();
    const handleClose = () => {
        navigate("/");
    };

    return (
        <Modal show={true} onHide={handleClose} centered size="lg">
            {!user ? (
                <>
                    <Modal.Header closeButton className="bg-danger text-white">
                        <Modal.Title>Không tìm thấy người dùng</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center py-5">
                        <h4>Người dùng không tồn tại hoặc đã bị xóa</h4>
                    </Modal.Body>
                </>
            ) : (
                <>
                    <Modal.Header className="bg-primary text-white" closeButton>
                        <Modal.Title>Thông tin chi tiết</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="px-4 py-4">
                        <div className="text-center mb-4">
                            <div className="mb-3">
                                <img
                                    src="/src/assets/image.png"
                                    alt="Avatar"
                                    className="rounded-circle"
                                    style={{ width: '100px', height: '100px' }}
                                />
                            </div>
                            <h3 className="mb-0">{user.name}</h3>
                        </div>
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex">
                                    <strong className="mx-2">Email:</strong>
                                    <p className="mb-0">{user.email}</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <div className="d-flex space-x-1">
                                    <strong className="mx-2">Tuổi:</strong>
                                    <p className="mb-0">{user.age}</p>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Đóng
                        </Button>
                    </Modal.Footer>
                </>
            )}
        </Modal>
    );
};

export default UserDetail;
