import { Routes, Route, Link } from 'react-router-dom';
import { Home, Users, QrCode } from 'lucide-react';
import DetallePrenda from './components/DetallePrenda';
import AdminPanel from './components/AdminPanel';
import './styles/main.css';

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            ECO
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <Home size={20} /> Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link">
                <Users size={20} /> Panel
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prenda/:id" element={<DetallePrenda />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <p className="hero-subtitle">Descubre la historia detrás de cada prenda</p>
        <p className="hero-description">
          Cada prenda tiene una historia: quién la creó, de dónde vienen sus materiales, 
          y qué impacto tiene en el planeta. Escanea un código QR para descubrirla
        </p>
      </section>

      <section className="features-section">
        <h2>¿Cómo funciona?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>1. Escanea el QR</h3>
            <p>Abre tu cámara o app de escaneo de códigos QR en la prenda</p>
          </div>
          <div className="feature">
            <h3>2. Se abre la página</h3>
            <p>Tu navegador abre automáticamente la historia de la prenda</p>
          </div>
          <div className="feature">
            <h3>3. Lee la historia</h3>
            <p>Conoce al artesano, materiales, proceso y impacto ambiental</p>
          </div>
          <div className="feature">
            <h3>4. Compra con confianza</h3>
            <p>Apoya directamente a artesanos y comunidades locales</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="btn-home">
        Volver a Inicio
      </Link>
    </div>
  );
}

export default App;