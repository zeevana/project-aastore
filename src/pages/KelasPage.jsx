import { Row, Col, Container, Card } from "react-bootstrap"
import { priceList, ff } from '../data/index';

const KelasPage = () => {
  return (

    <div className="mb-4 pt-5">
      <Container>
        <Row className="justify-content-center g-4">
          <h2>Genshin Impact</h2>
          {priceList.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}> {/* Menentukan jumlah kolom untuk tampilan responsif */}
              <Card>
                <Card.Body>
                  <Card.Title>{item.item}</Card.Title>
                  <Card.Text>
                    Harga: {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="justify-content-center g-4 pt-5">
          <h2>Free Fire</h2>
          {ff.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}> {/* Menentukan jumlah kolom untuk tampilan responsif */}
              <Card>
                <Card.Body>
                  <Card.Title>{item.item}</Card.Title>
                  <Card.Text>
                    Harga: {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>

  )
}

export default KelasPage