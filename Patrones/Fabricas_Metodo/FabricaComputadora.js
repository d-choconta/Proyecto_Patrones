const FabricaProducto = require('./FabricaProducto');
const Computadora = require('../Productos/Computadora');

class FabricaComputadora extends FabricaProducto {
  crearProducto({ nombre, precio, especificaciones, linea }) {
    return new Computadora({ nombre, precio, especificaciones, linea });
  }
}

module.exports = FabricaComputadora;