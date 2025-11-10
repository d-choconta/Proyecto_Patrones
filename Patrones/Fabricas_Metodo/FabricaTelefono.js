const FabricaProducto = require('./FabricaProducto');
const Telefono = require('../Productos/Telefono');

class FabricaTelefono extends FabricaProducto {
  crearProducto({ nombre, precio, especificaciones, linea }) {
    return new Telefono({ nombre, precio, especificaciones, linea });
  }
}

module.exports = FabricaTelefono;