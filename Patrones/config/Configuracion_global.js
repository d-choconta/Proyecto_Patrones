/*Singleton: ConfiguracionGlobal*/
class ConfiguracionGlobal {
  constructor() {
    if (ConfiguracionGlobal._instancia) {
      return ConfiguracionGlobal._instancia;
    }
    /** @type {{modo: 'debug'|'produccion', idioma: string, entorno: string}} */
    this.ajustes = { modo: 'debug', idioma: 'es', entorno: 'local' };
    ConfiguracionGlobal._instancia = this;
  }

  static obtenerInstancia() {
    return new ConfiguracionGlobal();
  }

  setAjuste(clave, valor) {
    this.ajustes[clave] = valor;
  }

  getAjuste(clave) {
    return this.ajustes[clave];
  }

  toString() {
    return `[Configuración] modo=${this.ajustes.modo}, idioma=${this.ajustes.idioma}, entorno=${this.ajustes.entorno}`;
  }
}

module.exports = ConfiguracionGlobal;
