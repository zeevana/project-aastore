import { Container, Row, Col } from "react-bootstrap";
import { priceList } from '../data/index';

const Sementara = () => {
    return (
        <div className="listG min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <h2>Ghensin Impact</h2>
                        <ul>
                            {priceList.map((item) => (
                                <li key={item.id}>
                                    {item.item} - Harga: {item.price}
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>

    )

};

export default Sementara