import { Bank } from "./bank";

export class Cuentas {
    id:number;
    capital:number;
    tea:number;
    mintea:number;
    dateStart:Date;
    dateEnd:Date;
    monthly_payment:boolean;
    interest:number;
    bank:Bank[]
    constructor() {
        this.capital =0;
        this.tea=0;
        this.mintea=0;
        this.dateStart=null;
        this.dateEnd=null;
        this.interest=0;
    }
}