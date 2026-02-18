"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediadorChatGrupal = void 0;
class MediadorChatGrupal {
    constructor(emisores) {
        this.emisores = [];
        this.emisores = emisores;
    }
    agregarEmisor(emisor) {
        this.emisores.push(emisor);
    }
    notificar(emisor, evento) {
        for (const receptor of this.emisores) {
            if (receptor !== emisor) {
                (receptor).recibir(evento);
            }
        }
    }
}
exports.MediadorChatGrupal = MediadorChatGrupal;
