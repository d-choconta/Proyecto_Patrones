class ProductoDecorador {
  constructor(producto) {
    this._producto = producto;
  }

  mostrarInfo() {
    this._producto.mostrarInfo();
  }

  obtenerNombre() {
    return this._producto.nombre;
  }

  obtenerPrecio() {
    return this._producto.precio;
  }
}

module.exports = ProductoDecorador;
