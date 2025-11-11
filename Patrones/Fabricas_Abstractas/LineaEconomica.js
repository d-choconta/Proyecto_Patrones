const LineaFabrica = require('./LineaFabrica');
const Computadora = require('../Productos/Computadora');
const Telefono = require('../Productos/Telefono');
const Tableta = require('../Productos/Tableta');

class LineaEconomicaFabrica extends LineaFabrica {
  crearComputadora() {
    return new Computadora({
      nombre: 'TOSHIBA',
      precio: 550,
      linea: 'Económica',
      especificaciones: { cpu: 'i3', ram: '8GB', ssd: '256GB', gpu: 'Integrada' }
    });
  }
  crearTelefono() {
    return new Telefono({
      nombre: 'OPPO',
      precio: 199,
      linea: 'Económica',
      especificaciones: { camara: '13MP', pantalla: '6.0" LCD 60Hz', bateria: '4000mAh' }
    });
  }
  crearTableta() {
    return new Tableta({
      nombre: 'TabMini 8',
      precio: 149,
      linea: 'Económica',
      especificaciones: { pantalla: '8" LCD', stylus: false, almacenamiento: '64GB' }
    });
  }
}

module.exports = LineaEconomicaFabrica;
