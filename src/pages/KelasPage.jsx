import { Row, Col, Container, Card } from "react-bootstrap"
import { priceList, ff, ml } from '../data/index';


const KelasPage = () => {
  return (

    <div className="kelaz">
      <Container>

        <h2 className="fw-bold ">Genshin Impact</h2>
        <Row className="justify-content-center g-4 mb-5 ">
          {priceList.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}> {/* Menentukan jumlah kolom untuk tampilan responsif */}
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold">{item.item}</Card.Title>
                  <Card.Text>
                    Harga: {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="fw-bold pt-5">Free Fire</h2>
        <Row className="justify-content-center g-4 mb-5">
          {ff.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}> {/* Menentukan jumlah kolom untuk tampilan responsif */}
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold">{item.item}</Card.Title>
                  <Card.Text>
                    Harga: {item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h2 className="fw-bold pt-5">Mobile Legends</h2>
        <Row className="justify-content-center g-4 mb-5">
          {ml.map((item) => (
            <Col key={item.id} xs={12} md={6} lg={4}> {/* Menentukan jumlah kolom untuk tampilan responsif */}
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold">{item.item}</Card.Title>
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