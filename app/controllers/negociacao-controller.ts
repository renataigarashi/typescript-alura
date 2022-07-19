import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement; //controller ta pegando os dados do tipo HTMLInputElement do dom
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');

    }
    adiciona(): void{
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        const negociacoes =  this.negociacoes.lista();      
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        console.log(negociacoes);
        this.limparFormulário();

    }

    criaNegociacao(): Negociacao {
        const exp = /-/g; //encontrar o hifen e o 'g' é de global, pra encontrar todos os hifens
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor)

    }

    limparFormulário(): void{
        this.inputData.value= '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}
