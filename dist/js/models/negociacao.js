export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor:  number;
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //como quero retornas os dados, posso apagar os dados do get e no construtor tonar public e colocar readonly
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g; //encontrar o hifen e o 'g' é de global, pra encontrar todos os hifens
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    // get quantidade(): number{
    //     return this._quantidade;
    // }
    // get valor(): number{
    //     return this._valor;
    // }
    get volume() {
        return this.quantidade * this.valor;
    }
}
