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
