export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor:  number;
   

    constructor(
        public readonly data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ){}

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

    get volume(){
        return this.quantidade * this.valor
    }
}
