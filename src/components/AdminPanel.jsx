import { useState, useEffect } from 'react';
import { Search, Eye, QrCode, AlertCircle } from 'lucide-react';
import QRGenerator from './QRGenerator';
import prendaService from '../services/prendaService.js';
import '../styles/AdminPanel.css';

export default function AdminPanel() {
  const [prendas, setPrendas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPrendas, setFilteredPrendas] = useState([]);
  const [selectedPrenda, setSelectedPrenda] = useState(null);
  const [showQRGenerator, setShowQRGenerator] = useState(false);

  useEffect(() => {
    cargarPrendas();
  }, []);

  useEffect(() => {
    filtrarPrendas();
  }, [searchTerm, prendas]);

  const cargarPrendas = async () => {
    try {
      setLoading(true);
      const datos = await prendaService.getAllPrendas();
      setPrendas(datos);
    } catch (error) {
      console.error('Error al cargar prendas:', error);
    } finally {
      setLoading(false);
    }
  };

  const filtrarPrendas = async () => {
    if (!searchTerm.trim()) {
      setFilteredPrendas(prendas);
      return;
    }

    try {
      const resultados = await prendaService.searchPrendas(searchTerm);
      setFilteredPrendas(resultados);
    } catch (error) {
      console.error('Error en búsqueda:', error);
    }
  };

  const handleSelectPrenda = (prenda) => {
    setSelectedPrenda(prenda);
    setShowQRGenerator(true);
  };

  const handleCloseQRGenerator = () => {
    setShowQRGenerator(false);
    setSelectedPrenda(null);
  };

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <div className="admin-panel-container">
      {/* Mostrar QR Generator si está seleccionada una prenda */}
      {showQRGenerator && selectedPrenda && (
        <div className="qr-generator-modal">
          <div className="qr-generator-content">
            <button 
              className="close-btn"
              onClick={handleCloseQRGenerator}
              title="Cerrar"
            >
              ✕
            </button>
            <QRGenerator 
              prendaId={selectedPrenda.id}
              prendaNombre={selectedPrenda.nombre}
            />
          </div>
        </div>
      )}

      {/* Grid de prendas */}
      <div className="prendas-grid">
        {filteredPrendas.length > 0 ? (
          filteredPrendas.map((prenda) => (
            <div key={prenda.id} className="prenda-card">
              <div className="card-id">
                <span className="id-badge">{prenda.id}</span>
              </div>

              <div className="card-content">
                <h3 className="card-title">{prenda.nombre}</h3>

                <div className="card-info">
                  <p>
                    <strong>Origen:</strong> {prenda.origen}
                  </p>
                  <p>
                    <strong>Artesano:</strong> {prenda.artesano}
                  </p>
                  <p>
                    <strong>Stock:</strong>
                    <span className={`stock-badge ${prenda.stock > 0 ? 'available' : 'unavailable'}`}>
                      {prenda.stock > 0 ? `${prenda.stock} disponibles` : 'Sin stock'}
                    </span>
                  </p>
                </div>

                <p className="card-price">{prenda.precioRecomendado}</p>
              </div>

              <div className="card-actions">
                <button 
                  className="btn-qr"
                  onClick={() => handleSelectPrenda(prenda)}
                  title="Generar y descargar QR"
                >
                  <QrCode size={18} /> Generar QR
                </button>
                <button 
                  className="btn-view"
                  onClick={() => window.open(`/prenda/${prenda.id}`, '_blank')}
                  title="Ver página de la prenda"
                >
                  <Eye size={18} /> Ver
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron prendas que coincidan con tu búsqueda.</p>
            <button 
              className="btn-reset"
              onClick={() => setSearchTerm('')}
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
