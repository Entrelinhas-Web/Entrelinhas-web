import registros from "../models/registros.js";

const desabafosRegistrados = document.querySelector('#desabafos-registrados');
const emocoesRegistradas = document.querySelector('#emocoes-registradas span');

desabafosRegistrados.textContent = registros.length;
emocoesRegistradas.textContent = new Set(registros.map((registro) => registro.emocao)).size;