export class Transaction {
    // position','tipo','fecha', 'capital', 'monto
    id:number;
    type: string;
    date: Date;
    capital: number;
    amount: number;
    constructor() {
        this.type = "";
        this.capital = this.amount = 0;
        this.date = null;
    }
}