const prendas = {
  'TRAJE-001': {
    id: 'TRAJE-001',
    nombre: 'Poncho Artesanal Internacional de Gemas',
    origen: 'Boyacá, Colombia', // Origen probable basado en el estilo del tejido
    artesano: 'Taller Textil Tradicional', 
    fechaCreacion: '2026-04-05',
    materiales: ['Lana de oveja natural', 'Hilos sintéticos para bordado'],
    relato: 'Poncho tradicional de color crudo con franjas negras verticales y flecos en el borde inferior. Esta pieza cuenta con un bordado central personalizado de la empresa "Internacional de Gemas", integrando la identidad corporativa con la tradición textil colombiana.',
    certificaciones: ['Artesanía de Colombia', 'Hecho a Mano'],
    imagenesProceso: [
      'https://via.placeholder.com/400x300?text=Esquilado+de+Lana',
      'https://via.placeholder.com/400x300?text=Tejido+en+Telar',
      'https://via.placeholder.com/400x300?text=Bordado+Logotipo',
      'https://via.placeholder.com/400x300?text=Acabado+de+Flecos'
    ],
    impactoAmbos: {
      huellaCarbono: '1.8 kg CO₂',
      aguaUsada: '450 litros',
      residuos: 'Bajo residuo (biodegradable)',
      detalles: 'Lana virgen procesada localmente con técnicas de tejido manual que reducen el consumo eléctrico.'
    },
    precioRecomendado: '$120,000',
    stock: 5
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