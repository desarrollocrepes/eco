import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Leaf, Droplet, Recycle, User, Calendar, DollarSign, Loader } from 'lucide-react';
import prendaService from '../services/prendaService.js';
import '../styles/DetallePrenda.css';

export default function DetallePrenda() {
  const { id } = useParams();
  const [prenda, setPrenda] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagenActual, setImagenActual] = useState(0);

  useEffect(() => {
    const cargarPrenda = async () => {
      try {
        setLoading(true);
        const datos = await prendaService.getPrendaById(id);
        setPrenda(datos);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPrenda(null);
      } finally {
        setLoading(false);
      }
    };

    cargarPrenda();
  }, [id]);

  if (loading) {
    return (
      <div className="prenda-loading">
        <Loader size={50} className="spinner" />
        <p>Cargando historia de la prenda...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="prenda-error">
        <div className="error-icon">!</div>
        <h2>Prenda no encontrada</h2>
        <p>{error}</p>
        <p className="error-hint">Verifica que el código QR sea válido o intenta con otro ID.</p>
      </div>
    );
  }

  if (!prenda) {
    return <div className="prenda-error">No hay datos disponibles</div>;
  }

  const imagenesProceso = prenda.imagenesProceso || [];
  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenesProceso.length);
  };
  const anteriorImagen = () => {
    setImagenActual((prev) => (prev - 1 + imagenesProceso.length) % imagenesProceso.length);
  };

  return (
    <div className="prenda-container">
      {/* Header */}
      <div className="prenda-header">
        <h1>{prenda.nombre}</h1>
        <p className="prenda-id">ID: {prenda.id}</p>
      </div>

      {/* Información Principal */}
      <section className="prenda-section info-principal">
        <div className="info-grid">
          <div className="info-item">
            <span className="icon"><User size={32} /></span>
            <h3>Origen</h3>
            <p>{prenda.origen}</p>
          </div>
          <div className="info-item">
            <span className="icon"><User size={32} /></span>
            <h3>Artesano/a</h3>
            <p>{prenda.artesano}</p>
          </div>
          <div className="info-item">
            <span className="icon"><Calendar size={32} /></span>
            <h3>Fecha de Creación</h3>
            <p>{new Date(prenda.fechaCreacion).toLocaleDateString('es-CO')}</p>
          </div>
          <div className="info-item">
            <span className="icon"><DollarSign size={32} /></span>
            <h3>Precio Recomendado</h3>
            <p>{prenda.precioRecomendado}</p>
          </div>
        </div>
      </section>

      {/* Relato Principal */}
      <section className="prenda-section relato">
        <h2>La Historia</h2>
        <p className="relato-text">{prenda.relato}</p>
      </section>

      {/* Materiales */}
      <section className="prenda-section materiales">
        <h2>Materiales</h2>
        <div className="materiales-list">
          {prenda.materiales.map((material, idx) => (
            <div key={idx} className="material-item">
              <span className="material-dot"></span>
              <span>{material}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Certificaciones */}
      {prenda.certificaciones && prenda.certificaciones.length > 0 && (
        <section className="prenda-section certificaciones">
          <h2>Certificaciones</h2>
          <div className="certificaciones-grid">
            {prenda.certificaciones.map((cert, idx) => (
              <div key={idx} className="certificacion-badge">
                <CheckCircle size={20} /> {cert}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Galería de Proceso */}
      {imagenesProceso.length > 0 && (
        <section className="prenda-section galeria">
          <h2>Proceso de Producción</h2>
          <div className="galeria-container">
            <div className="galeria-imagen">
              <p className="galeria-placeholder">Galería de imágenes del proceso</p>
            </div>
            <div className="galeria-controles">
              <button onClick={anteriorImagen} className="btn-nav">
                <ChevronLeft size={20} /> Anterior
              </button>
              <span className="contador">
                {imagenActual + 1} / {imagenesProceso.length}
              </span>
              <button onClick={siguienteImagen} className="btn-nav">
                Siguiente <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Impacto Ambiental */}
      {prenda.impactoAmbiental && (
        <section className="prenda-section impacto-ambiental">
          <h2>Impacto Ambiental</h2>
          <div className="impacto-grid">
            <div className="impacto-item">
              <span className="impacto-icon"><Leaf size={32} /></span>
              <h4>Huella de Carbono</h4>
              <p className="impacto-valor">{prenda.impactoAmbiental.huellaCarbono}</p>
            </div>
            <div className="impacto-item">
              <span className="impacto-icon"><Droplet size={32} /></span>
              <h4>Agua Utilizada</h4>
              <p className="impacto-valor">{prenda.impactoAmbiental.aguaUsada}</p>
            </div>
            <div className="impacto-item">
              <span className="impacto-icon"><Recycle size={32} /></span>
              <h4>Residuos</h4>
              <p className="impacto-valor">{prenda.impactoAmbiental.residuos}</p>
            </div>
          </div>
          <div className="impacto-detalles">
            <p>{prenda.impactoAmbiental.detalles}</p>
          </div>
        </section>
      )}

      {/* Disponibilidad */}
      <section className="prenda-section disponibilidad">
        <div className="stock-info">
          <h3>Disponibilidad</h3>
          <p className="stock-cantidad">
            {prenda.stock > 0 
              ? `${prenda.stock} unidades disponibles`
              : 'Sin stock'}
          </p>
        </div>
      </section>
    </div>
  );
}
