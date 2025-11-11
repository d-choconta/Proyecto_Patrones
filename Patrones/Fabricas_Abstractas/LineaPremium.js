const LineaFabrica = require('./LineaFabrica');
const Computadora = require('../Productos/Computadora');
const Telefono = require('../Productos/Telefono');
const Tableta = require('../Productos/Tableta');

class LineaPremiumFabrica extends LineaFabrica {
  crearComputadora() {
    return new Computadora({
      nombre: 'ProBook X1',
      precio: 2500,
      linea: 'Premium',
      especificaciones: { cpu: 'i9', ram: '32GB', ssd: '1TB', gpu: 'RTX 4070' }
    });
  }
  crearTelefono() {
    return new Telefono({
      nombre: 'Samsung A54',
      precio: 300,
      linea: 'Premium',
      especificaciones: { camara: '108MP', pantalla: '6.8" OLED 120Hz', bateria: '5000mAh' }
    });
  }
  crearTableta() {
    return new Tableta({
      nombre: 'TabMaster Pro',
      precio: 1200,
      linea: 'Premium',
      especificaciones: { pantalla: '12.9" MiniLED', stylus: true, almacenamiento: '512GB' }
    });
  }
}

module.exports = LineaPremiumFabrica;
