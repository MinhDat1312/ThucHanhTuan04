import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="mb-3">Trang không tồn tại</h2>
            <p className="text-muted">Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Button variant="primary" onClick={() => navigate('/')}>
                Quay lại trang chủ
            </Button>
        </Container>
    );
};

export default NotFound;
