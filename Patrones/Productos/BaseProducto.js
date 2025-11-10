class BaseProducto {
  constructor({ tipo, nombre, precio, especificaciones = {}, linea = 'Estándar' }) {
    if (new.target === BaseProducto) {
      throw new Error('BaseProducto es abstracta y no debe instanciarse directamente.');
    }
    this.tipo = tipo; // 'Computadora' | 'Teléfono' | 'Tableta'
    this.nombre = nombre;
    this.precio = precio;
    this.especificaciones = { ...especificaciones };
    this.linea = linea;
  }

  mostrarInfo() {
    throw new Error('Método no implementado: mostrarInfo');
  }

  // Prototype
  clonar(cambios = {}) {
    const Copia = this.constructor;
    return new Copia({
      tipo: cambios.tipo ?? this.tipo,
      nombre: cambios.nombre ?? this.nombre,
      precio: cambios.precio ?? this.precio,
      especificaciones: { ...this.especificaciones, ...(cambios.especificaciones || {}) },
      linea: cambios.linea ?? this.linea,
    });
  }
}

module.exports = BaseProducto;
