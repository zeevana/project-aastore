import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold">AaStore</h3>
            <p className="desc">Jl. Drs Esau Sesa Makobrimob, Sowi, Distrik Manokwari, Kabupaten Manokwari, Papua Barat, 98315</p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">0852-6951-2024</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-regular fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>

            </div>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent