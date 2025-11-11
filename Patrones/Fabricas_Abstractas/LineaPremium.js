const LineaFabrica = require('./LineaFabrica');
const Computadora = require('../Productos/Computadora');
const Telefono = require('../Productos/Telefono');
const Tableta = require('../Productos/Tableta');

class LineaPremiumFabrica extends LineaFabrica {
  crearComputadora() {
    return new Computadora({
      nombre: 'ProBook',
      precio: 2500,
      linea: 'Premium',
      especificaciones: { cpu: 'i9', ram: '32GB', ssd: '1TB', gpu: 'RTX 4070' }
    });
  }
  crearTelefono() {
    return new Telefono({
      nombre: 'Samsung flip 8',
      precio: 3000,
      linea: 'Premium',
      especificaciones: { camara: '108MP', pantalla: '6.8" OLED 120Hz', bateria: '5000mAh' }
    });
  }
  crearTableta() {
    return new Tableta({
      nombre: 'Ipad Pro',
      precio: 1200,
      linea: 'Premium',
      especificaciones: { pantalla: '12.9" MiniLED', stylus: true, almacenamiento: '512GB' }
    });
  }
}

module.exports = LineaPremiumFabrica;
