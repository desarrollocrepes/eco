import prendas from '../utils/mockData.js';

export const prendaService = {
  /**
   * Get a single garment by ID
   * @param {string} id - The garment ID (e.g., 'TRAJE-001')
   * @returns {Promise<Object>} The garment data
   */
  getPrendaById: async (id) => {
    if (!prendas[id]) {
      throw new Error(`Prenda con ID ${id} no encontrada`);
    }

    return prendas[id];
  },

  /**
   * Get all garments (for admin panel)
   * @returns {Promise<Array>} Array of all garments
   */
  getAllPrendas: async () => {
    return Object.values(prendas);
  },

  /**
   * Check if a garment exists
   * @param {string} id - The garment ID
   * @returns {Promise<boolean>} Whether the garment exists
   */
  prendaExists: async (id) => {
    return !!prendas[id];
  },

  /**
   * Get multiple garments by array of IDs
   * @param {Array<string>} ids - Array of garment IDs
   * @returns {Promise<Array>} Array of matching garments
   */
  getPrendasByIds: async (ids) => {
    return ids
      .filter(id => prendas[id])
      .map(id => prendas[id]);
  },

  /**
   * Search garments by name or origin
   * @param {string} query - Search term
   * @returns {Promise<Array>} Matching garments
   */
  searchPrendas: async (query) => {
    const q = query.toLowerCase();
    return Object.values(prendas).filter(
      prenda =>
        prenda.nombre.toLowerCase().includes(q) ||
        prenda.origen.toLowerCase().includes(q) ||
        prenda.artesano.toLowerCase().includes(q)
    );
  }
};

export default prendaService;