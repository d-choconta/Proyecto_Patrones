const LineaFabrica = require('./LineaFabrica');
const Computadora = require('../Productos/Computadora');
const Telefono = require('../Productos/Telefono');
const Tableta = require('../Productos/Tableta');

class LineaEstandarFabrica extends LineaFabrica {
  crearComputadora() {
    return new Computadora({
      nombre: 'SONY M3',
      precio: 1200,
      linea: 'Estándar',
      especificaciones: { cpu: 'i5', ram: '16GB', ssd: '512GB', gpu: 'Integrada' }
    });
  }
  crearTelefono() {
    return new Telefono({
      nombre: 'POCO T14',
      precio: 499,
      linea: 'Estándar',
      especificaciones: { camara: '50MP', pantalla: '6.1" IPS 90Hz', bateria: '4500mAh' }
    });
  }
  crearTableta() {
    return new Tableta({
      nombre: 'Lenovo Tab 10',
      precio: 399,
      linea: 'Estándar',
      especificaciones: { pantalla: '10.4" IPS', stylus: false, almacenamiento: '128GB' }
    });
  }
}

module.exports = LineaEstandarFabrica;
