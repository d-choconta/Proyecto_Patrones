const FabricaProducto = require('./FabricaProducto');
const Tableta = require('../Productos/Tableta');

class FabricaTableta extends FabricaProducto {
  crearProducto({ nombre, precio, especificaciones, linea }) {
    return new Tableta({ nombre, precio, especificaciones, linea });
  }
}

module.exports = FabricaTableta;