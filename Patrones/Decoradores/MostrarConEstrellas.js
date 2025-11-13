const ProductoDecorador = require('./ProductoDecorador');

class MostrarConEstrellas extends ProductoDecorador {
  mostrarInfo() {
    console.log("⭐⭐⭐⭐⭐"); /*estrellitasssssssss*/
    this._producto.mostrarInfo();
  }
}

module.exports = MostrarConEstrellas;
