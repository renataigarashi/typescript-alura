export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor:  number;
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    //como quero retornas os dados, posso apagar os dados do get e no construtor tonar public e colocar readonly
    // get data(): Date {
    //     return this._data;
    // }
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
