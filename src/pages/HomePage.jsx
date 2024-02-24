import { Container, Row, Col } from "react-bootstrap";
import HeroImage from '../assets/img/hero.png'
import { kelasTerbaru } from '../data/index';

import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4">
                Top Up <br /> <span>Game Murah</span> <br />Cuma disini!!!
              </h1>
              <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias nihil voluptatibus? Obcaecati alias aperiam, quam nulla dolore quo recusandae, ipsum voluptatibus rerum beatae ea velit natus corporis inventore ad.</p>
              <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Lihat List</button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={HeroImage} alt="hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">List Terbaru</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </Col>
          </Row>

          <Row>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col key={kelas.id}>
                  <img src={kelas.image} alt="unsplash.com" className="w-100 mb-3 rounded-top" />
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-conten-between align-items-center px-3 pb-3">
                    {/* <p className="m-0 text-primary fw bold">{kelas.price}</p> */}
                    <button className="btn btn-danger rounded-1" onClick={() => navigate("pages/kelaspage")}>{kelas.buy}</button>

                  </div>
                </Col>
              )
            })}

          </Row>

          <Row>
            <Col className="text-center">
              <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/kelas")}>Lihat Semua Game<i className="fa-solid"></i></button>


            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponent />


    </div>
  )
};

export default HomePage