"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const Emisor_1 = require("./Emisor");
class Usuario extends Emisor_1.Emisor {
    constructor(nombre, mediador) {
        super(mediador);
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    recibir(mensaje) {
        console.log(`${this.nombre} recibió: ${mensaje}`);
    }
}
exports.Usuario = Usuario;
