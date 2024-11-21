import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import NavbarComponent from './components/NavbarComponent';
import KelasPage from './pages/KelasPage';
import FooterComponent from './components/FooterComponent';
import KelasDetail from './pages/KelasDetail';
import PaymentPage from './pages/PaymentPage';


function App() {
  return (
    <div>

      <NavbarComponent />
      <div style={{ paddingTop: "70px" }}>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/kelas/:kelasId" Component={KelasDetail} /> {/* Rute untuk halaman detail kelas */}
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      </div>


      <FooterComponent />
    </div>


  );
}

export default App;
