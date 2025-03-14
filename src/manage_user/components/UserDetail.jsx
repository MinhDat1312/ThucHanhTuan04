import React, { useContext, useState } from 'react';
import { Button, Col, Form, Image, Modal, Row } from 'react-bootstrap';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { UserConText } from '../UserConText';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const UserDetail = () => {
    const { users, setUsers, setSubmit, setState } = useContext(UserConText);
    const navigate = useNavigate();
    const { id } = useParams();
    const user = users.find((user) => user.id == parseInt(id));
    const [formData, setFormData] = useState(user || {});
    const [active, setActive] = useState((user && user.follow) || false);
    const [websites, setWebsites] = useState((user && user.websites) || {});

    const handleClose = () => {
        navigate('/');
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        console.log(formData);
    };

    const handleUpdate = () => {
        const updateUser = { ...formData, follow: active, websites: websites };

        const updateUsers = users.map((user) => (user.id == updateUser.id ? updateUser : user));
        setUsers(updateUsers);
        setSubmit(true);
        setState(3);
        handleClose();
        setTimeout(() => setSubmit(false), 3000);
    };

    const handleLinkTo = (url) => {
        sessionStorage.setItem('prevPage', window.location.href);
        window.open(`https://${url}.com/`, '_blank');

        setWebsites((prevWebsites) => {
            const newWebsites = { ...prevWebsites, [url]: `https://${url}.com/` };
            return newWebsites;
        });
    };

    return (
        <Modal show={true} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{user ? 'Thông tin người dùng' : 'Không tìm thấy người dùng'}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex p-0">
                {user ? (
                    <>
                        <div className="text-center w-50 m-3 shadow-lg rounded-4">
                            <Image
                                src="/src/assets/user.jpg"
                                roundedCircle
                                width="100"
                                height="100"
                                alt="Avatar người dùng"
                                style={{
                                    border: '3px solid #1DA1F2',
                                    padding: '2px',
                                    marginTop: '8px',
                                }}
                            />

                            <div className="d-flex flex-column gap-3">
                                <div className="d-flex flex-column justify-content-center align-items-center gap-2">
                                    <h3 className="m-0">{user.name}</h3>
                                    <span>{user.email}</span>
                                    <Button
                                        variant="outline-primary"
                                        className="w-25"
                                        onClick={() => setActive(!active)}
                                        active={active}
                                    >
                                        Theo dõi
                                    </Button>
                                </div>
                                <div className="d-flex flex-column mx-3">
                                    <Form.Group className="d-flex justify-content-between" controlId="facebook">
                                        <Form.Label onClick={() => handleLinkTo('facebook')}>
                                            <FaFacebook className="fs-4 me-2 text-primary" />
                                            <span>Facebook</span>
                                        </Form.Label>
                                        <Form.Control
                                            value={websites['facebook'] || ''}
                                            name="facebook"
                                            style={{ height: '25px', width: '200px', margin: '2px 0 0 10px' }}
                                            className="text-primary"
                                            placeholder="Link your facebook"
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group className="d-flex justify-content-between" controlId="instagram">
                                        <Form.Label onClick={() => handleLinkTo('instagram')}>
                                            <FaInstagram
                                                className="fs-4 me-2"
                                                style={{
                                                    color: '#DD2A7B',
                                                }}
                                            />
                                            <span>Instagram</span>
                                        </Form.Label>
                                        <Form.Control
                                            value={websites['instagram'] || ''}
                                            name="instagram"
                                            style={{ height: '25px', width: '200px', margin: '2px 0 0 10px' }}
                                            className="text-primary"
                                            placeholder="Link your instagram"
                                            disabled
                                        />
                                    </Form.Group>
                                    <Form.Group className="d-flex justify-content-between" controlId="twitter">
                                        <Form.Label onClick={() => handleLinkTo('twitter')}>
                                            <FaTwitter
                                                className="fs-4 me-2"
                                                style={{
                                                    color: '#1DA1F2',
                                                }}
                                            />
                                            <span>Twitter</span>
                                        </Form.Label>
                                        <Form.Control
                                            value={websites['twitter'] || ''}
                                            name="twitter"
                                            style={{ height: '25px', width: '200px', margin: '2px 0 0 10px' }}
                                            className="text-primary"
                                            placeholder="Link your twitter"
                                            disabled
                                        />
                                    </Form.Group>
                                </div>
                            </div>
                        </div>

                        <Form className="w-50 me-3 mt-3">
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Họ và tên</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name || ''}
                                    onChange={handleChange}
                                    placeholder="Enter your username"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email || ''}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    type="tel"
                                    name="phone"
                                    value={formData.phone || ''}
                                    onChange={handleChange}
                                    placeholder="Enter your telephone"
                                    pattern="[0-9]{10,15}"
                                    onInput={(e) =>
                                        (e.target.value = e.target.value
                                            .replace(/\D/g, '')
                                            .replace(/(\\d{3})(\\d{3})(\\d{4})/))
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Địa chỉ</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formData.address || ''}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                />
                            </Form.Group>
                        </Form>
                    </>
                ) : (
                    <Image
                        src="/src/assets/flat-design-of-no-user-found-vector.jpg"
                        width="100%"
                        height="500px"
                        alt="Avatar người dùng"
                    />
                )}
            </Modal.Body>
            {user ? (
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                        Cập nhật
                    </Button>
                </Modal.Footer>
            ) : (
                ''
            )}
        </Modal>
    );
};

export default UserDetail;
