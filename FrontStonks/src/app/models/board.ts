import { Cuentas } from "./cuentas";

export class Board {
    id: number;
    name: string;
    accounts:Cuentas[]
    constructor() {
        this.name ='';
    }
}