import { Bank } from "./bank";
import { Board } from "./board";

export class Cuentas {
    id:number;
    capital:number;
    tea:number;
    mintea:number;
    dateStart:Date;
    dateEnd:Date;
    monthlyPayment:boolean;
    interest:number;
    bank:Bank[]
    board:Board[]
    constructor() {
        this.capital =0;
        this.tea=0;
        this.mintea=0;
        this.dateStart=null;
        this.dateEnd=null;
        this.interest=0;
    }
}