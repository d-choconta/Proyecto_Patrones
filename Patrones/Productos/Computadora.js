const BaseProducto = require('./BaseProducto');

class Computadora extends BaseProducto {
  constructor({ nombre, precio, especificaciones = {}, linea = 'Estándar' }) {
    super({ tipo: 'Computadora', nombre, precio, especificaciones, linea });
  }

  mostrarInfo() {
    console.log(`[${this.linea}] Computadora "${this.nombre}" - $${this.precio} USD`);
    console.log('  Especificaciones:', this.especificaciones);
  }
}

module.exports = Computadora;
