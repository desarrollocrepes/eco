import prenda001 from '../assets/PRENDA001.jpeg';

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
      prenda001,
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
}
};

export default prendas;