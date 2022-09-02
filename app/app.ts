import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if(form){
  form.addEventListener('submit', event => {
      //preventDefault vai impedir que o form recarregue ao submeter formulario
      event.preventDefault(); 
      controller.adiciona();
  })
} else {
  throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe')
}





