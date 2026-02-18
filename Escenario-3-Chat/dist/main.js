"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediadorChatGrupal_1 = require("./MediadorChatGrupal");
const Usuario_1 = require("./Usuario");
const usuarios = [];
const mediador = new MediadorChatGrupal_1.MediadorChatGrupal(usuarios);
/**
 * Adición centralizada de nuevos usuarios
 */
const usuario1 = new Usuario_1.Usuario("Alice", mediador);
const usuario2 = new Usuario_1.Usuario("Bob", mediador);
const usuario3 = new Usuario_1.Usuario("Charlie", mediador);
const usuario4 = new Usuario_1.Usuario("Hector", mediador);
mediador.agregarEmisor(usuario1);
mediador.agregarEmisor(usuario2);
mediador.agregarEmisor(usuario3);
mediador.agregarEmisor(usuario4);
usuario1.enviar("Hola a todos, soy Alice.");
console.log('\n');
usuario2.enviar("Hola Alice, soy Bob.");
console.log('\n');
usuario3.enviar("Hola Alice y Bob, soy Charlie.");
console.log('\n');
usuario4.enviar("Hola, soy Hector.");
console.log('\n');
console.log("Fin del programa.");
