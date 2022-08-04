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
    public adiciona(): void{
        const negociacao = this.criaNegociacao();
        // getDay são os dias da semana, começa no 0 (domingo) e vai até 6 (sabado)
        if(negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) { // vai salvar os dados dos dias uteis
          this.negociacoes.adiciona(negociacao);    
          this.limparFormulário();
          this.atualizarView();
        } else {
          this.mensagemView.update("Apenas negociações em dias úteis são aceitas")
        }

    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g; //encontrar o hifen e o 'g' é de global, pra encontrar todos os hifens
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor)

    }

    private limparFormulário(): void{
        this.inputData.value= '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizarView(): void {
      this.negociacoesView.update(this.negociacoes);
      this.mensagemView.update('Negociação adicionada com sucesso!');
    }

}
