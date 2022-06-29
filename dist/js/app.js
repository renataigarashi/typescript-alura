import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    //preventDefault vai impedir que o form recarregue ao submeter formulario
    event.preventDefault();
    controller.adiciona();
});
