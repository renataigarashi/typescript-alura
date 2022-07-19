import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        const negociacoes = this.negociacoes.lista();
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        console.log(negociacoes);
        this.limparFormulário();
    }
    criaNegociacao() {
        const exp = /-/g; //encontrar o hifen e o 'g' é de global, pra encontrar todos os hifens
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulário() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
