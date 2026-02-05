import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Estrutura from './pages/Estrutura';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import TrabalheConosco from './pages/TrabalheConosco';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/estrutura" element={<Estrutura />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
