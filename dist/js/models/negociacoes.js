export class Negociacoes {
    constructor() {
        this.negociacoes = []; //Negociacao[] é igual Array<Negociacao> 
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray vai bloquear a a remoção ou inclusão de novos itens
    lista() {
        return this.negociacoes;
    }
}
