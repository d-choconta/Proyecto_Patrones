const ProductoDecorador = require('./ProductoDecorador');

class NombreEnMayusculas extends ProductoDecorador {
  obtenerNombre() {
    return super.obtenerNombre().toUpperCase();
  }

  mostrarInfo() {
    console.log(`Producto: ${this.obtenerNombre()} — $${this.obtenerPrecio()} USD`);
  }
}

module.exports = NombreEnMayusculas;
