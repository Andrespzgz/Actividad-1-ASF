"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emisor = void 0;
class Emisor {
    constructor(mediador) {
        this.mediador = mediador;
    }
    enviar(evento) {
        this.mediador.notificar(this, evento);
    }
}
exports.Emisor = Emisor;
