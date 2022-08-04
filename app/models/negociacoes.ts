import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];  //Negociacao[] é igual Array<Negociacao> 

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray vai bloquear a a remoção ou inclusão de novos itens
    public lista(): readonly Negociacao[]{ //readonly Negociacao é o mesmo que ReadOnlyArray<Negociacao>
        return this.negociacoes;
    }
}


