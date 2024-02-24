import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import NavbarComponent from './components/NavbarComponent';
import KelasPage from './pages/KelasPage';
import FooterComponent from './components/FooterComponent';
import "./dist/css/main.css";


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>

      <FooterComponent />
    </div>


  );
}

export default App;
