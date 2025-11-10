const BaseProducto = require('./BaseProducto');

class Telefono extends BaseProducto {
  constructor({ nombre, precio, especificaciones = {}, linea = 'Estándar' }) {
    super({ tipo: 'Teléfono', nombre, precio, especificaciones, linea });
  }

  mostrarInfo() {
    console.log(`[${this.linea}] Teléfono "${this.nombre}" - $${this.precio} USD`);
    console.log('  Especificaciones:', this.especificaciones);
  }
}

module.exports = Telefono;
