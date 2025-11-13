const ConfiguracionGlobal = require('./Patrones/config/ConfiguracionGlobal.js');

// Factory Method
const FabricaComputadora = require('./Patrones/Fabricas_Metodo/FabricaComputadora');
const FabricaTelefono = require('./Patrones/Fabricas_Metodo/FabricaTelefono');
const FabricaTableta = require('./Patrones/Fabricas_Metodo/FabricaTableta');

// Abstract Factory 
const LineaPremium = require('./Patrones/Fabricas_Abstractas/LineaPremium');
const LineaEstandar = require('./Patrones/Fabricas_Abstractas/LineaEstandar');
const LineaEconomica = require('./Patrones/Fabricas_Abstractas/LineaEconomica');

// Decorator
const NombreEnMayusculas   = require('./Patrones/Decoradores/NombreEnMayusculas');
const MostrarConEstrellas  = require('./Patrones/Decoradores/MostrarConEstrellas');

console.log('Singleton');
const conf1 = ConfiguracionGlobal.obtenerInstancia();
const conf2 = ConfiguracionGlobal.obtenerInstancia();
conf1.setAjuste('entorno', 'produccion');
console.log(conf1.toString());
console.log('¿La misma instancia?', conf1 === conf2);

console.log('\nFactory Method (individual)');
function appFactory(Fabrica, args) {
  const producto = Fabrica.crearProducto(args);
  producto.mostrarInfo();
  return producto;
}

function crearFabrica(tipo) {
  const fabricas = {
    computadora: FabricaComputadora,
    telefono: FabricaTelefono,
    tableta: FabricaTableta
  };
  const Fabrica = fabricas[tipo];
  if (!Fabrica) throw new Error('Tipo de fábrica no soportado: ' + tipo);
  return new Fabrica();
}

appFactory(crearFabrica('computadora'), {
  nombre: 'Acer',
  precio: 999,
  especificaciones: { cpu: 'Ryzen 7', ram: '16GB', ssd: '1TB' },
  linea: 'Estándar'
});

const compu = appFactory(crearFabrica('computadora'), {
  nombre: 'Mac os',
  precio: 2000,
  especificaciones: { cpu: 'ios 7', ram: '16GB', ssd: '1TB' },
  linea: 'Premium'
});

const tel = appFactory(crearFabrica('telefono'), {
  nombre: 'Xiaomi',
  precio: 399,
  especificaciones: { pantalla: '6.1" 90Hz', camara: '48MP' },
  linea: 'Económica'
});

console.log('\nPrototype (clonado producto)');
const telVariante = tel.clonar({ nombre: 'Xiaomi tap 12', especificaciones: { bateria: '5200mAh' }, precio: 449 });
telVariante.mostrarInfo();

const compuVariante = compu.clonar({ nombre: 'hp'});
compuVariante.mostrarInfo();

console.log('\nAbstract Factory');
function imprimirFamilia(fabricaLinea, etiqueta) {
  console.log('\n>>> Línea ' + etiqueta);
  const pc = fabricaLinea.crearComputadora(); pc.mostrarInfo();
  const ph = fabricaLinea.crearTelefono();    ph.mostrarInfo();
  const tb = fabricaLinea.crearTableta();     tb.mostrarInfo();
}

imprimirFamilia(new LineaPremium(), 'Premium');
imprimirFamilia(new LineaEstandar(), 'Estándar');
imprimirFamilia(new LineaEconomica(), 'Económica');

console.log('\n>>>Decorator con estrellitasssssssss y a mayusculas');
let telDecorado = new NombreEnMayusculas(tel);    
telDecorado     = new MostrarConEstrellas(telDecorado);

console.log('\nTeléfono decorado:');
telDecorado.mostrarInfo();

console.log('\nListo termino');
