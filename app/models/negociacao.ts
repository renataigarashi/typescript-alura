export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor:  number;
   

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
        ){}

    //como quero retornas os dados, posso apagar os dados do get e no construtor tonar public e colocar readonly

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g; //encontrar o hifen e o 'g' é de global, pra encontrar todos os hifens
        const date = new Date(dataString.replace(exp, ','))
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor)
    }

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
