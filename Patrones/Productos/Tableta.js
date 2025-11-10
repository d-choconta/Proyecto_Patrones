const BaseProducto = require('./BaseProducto');

class Tableta extends BaseProducto {
  constructor({ nombre, precio, especificaciones = {}, linea = 'Estándar' }) {
    super({ tipo: 'Tableta', nombre, precio, especificaciones, linea });
  }

  mostrarInfo() {
    console.log(`[${this.linea}] Tableta "${this.nombre}" - $${this.precio} USD`);
    console.log('  Especificaciones:', this.especificaciones);
  }
}

module.exports = Tableta;
