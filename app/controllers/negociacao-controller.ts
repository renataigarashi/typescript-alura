import { DiasDaSemana } from "../enums/dias-da-semana.js";
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
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;

    }
    public adiciona(): void{
        const negociacao = Negociacao.criaDe(
          this.inputData.value,
          this.inputQuantidade.value,
          this.inputValor.value
        );
        if(!this.ehDiaUtil(negociacao.data)) {
          this.mensagemView.update("Apenas negociações em dias úteis são aceitas")
          return;
        }
          this.negociacoes.adiciona(negociacao);    
          this.limparFormulário();
          this.atualizarView();
    }

    private ehDiaUtil(data:  Date) {
        // getDay são os dias da semana, começa no 0 (domingo) e vai até 6 (sabado)
      return data.getDay()  > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO
       // vai validar os dias uteis
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

