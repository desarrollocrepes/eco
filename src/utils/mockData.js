const prendas = {
  'TRAJE-001': {
    id: 'TRAJE-001',
    nombre: 'Camisa de Algodón Orgánico',
    origen: 'Medellín, Colombia',
    artesano: 'María Elena García',
    fechaCreacion: '2024-01-15',
    materiales: ['Algodón Orgánico 100%', 'Tinte Natural de Índigo'],
    relato: 'Esta prenda fue tejida a mano por María Elena, una artesana con 30 años de experiencia en la producción textil sostenible. El algodón proviene de cooperativas certificadas en la región del Cauca.',
    certificaciones: ['Certificado GOTS', 'Comercio Justo', 'Vegan'],
    imagenesProceso: [
      'https://via.placeholder.com/400x300?text=Cosecha+de+Algodón',
      'https://via.placeholder.com/400x300?text=Proceso+de+Hilado',
      'https://via.placeholder.com/400x300?text=Tejido+Manual',
      'https://via.placeholder.com/400x300?text=Empaque+Final'
    ],
    impactoAmbos: {
      huellaCarbono: '2.5 kg CO₂',
      aguaUsada: '1,800 litros',
      residuos: 'Cero residuos',
      detalles: 'Producción con energía solar y tinturas naturales sin químicos tóxicos'
    },
    precioRecomendado: '$89,000',
    stock: 15
  },

  'TRAJE-002': {
    id: 'TRAJE-002',
    nombre: 'Pantalón de Denim Sostenible',
    origen: 'Bogotá, Colombia',
    artesano: 'Taller Cooperativo "Los Tejedores"',
    fechaCreacion: '2024-02-20',
    materiales: ['Denim 100% Algodón Orgánico', 'Botones de Madera de Tagua'],
    relato: 'Creado por el taller cooperativo "Los Tejedores" que reúne a 12 artesanos dedicados a la producción de denim ecológico. Cada prenda es única y lleva la firma del grupo de producción.',
    certificaciones: ['Fair Trade Certified', 'GOTS', 'Vegan', 'Zero Waste'],
    imagenesProceso: [
      'https://via.placeholder.com/400x300?text=Cultivo+de+Algodón',
      'https://via.placeholder.com/400x300?text=Teñido+Natural',
      'https://via.placeholder.com/400x300?text=Corte+y+Confección',
      'https://via.placeholder.com/400x300?text=Control+de+Calidad'
    ],
    impactoAmbos: {
      huellaCarbono: '3.2 kg CO₂',
      aguaUsada: '2,200 litros',
      residuos: 'Reciclado al 95%',
      detalles: 'Los residuos se reutilizan para tapetes y bolsas complementarias'
    },
    precioRecomendado: '$125,000',
    stock: 8
  },

  'TRAJE-003': {
    id: 'TRAJE-003',
    nombre: 'Chaleco de Lana Reciclada',
    origen: 'Ipiales, Nariño',
    artesano: 'Cooperativa Andina de Tejedoras',
    fechaCreacion: '2024-03-10',
    materiales: ['Lana Reciclada 100%', 'Forro de Algodón Orgánico'],
    relato: 'Este chaleco es resultado de un proceso de reciclaje innovador donde prendas descartadas se transforman en nuevas creaciones. Cada pieza es un testimonio del ciclo de vida circular.',
    certificaciones: ['Reciclado Certificado', 'Comercio Justo', 'Producción Local'],
    imagenesProceso: [
      'https://via.placeholder.com/400x300?text=Recolección+de+Prendas',
      'https://via.placeholder.com/400x300?text=Clasificación+de+Lana',
      'https://via.placeholder.com/400x300?text=Desfilado+y+Rehilado',
      'https://via.placeholder.com/400x300?text=Tejido+Artesanal'
    ],
    impactoAmbos: {
      huellaCarbono: '1.1 kg CO₂',
      aguaUsada: '800 litros',
      residuos: 'Cero residuos - 100% reciclado',
      detalles: 'Por cada chaleco vendido se evita que 5 kg de ropa terminen en vertederos'
    },
    precioRecomendado: '$95,000',
    stock: 12
  }
};

export default prendas;