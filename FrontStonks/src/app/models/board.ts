import { Bank } from "./bank";
import { Cuentas } from "./cuentas";

export class Board {
    id: number;
    name: string;
    bank:Bank[]
    accounts:Cuentas[]
    constructor() {
        this.name ='';

    }
}