export class Cliente {
    id:number;
    dni: number;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    address: string;
    username: string;
    country: string;
    constructor() {
        this.firstName = this.username = this.password = this.phone = this.address = this.country = this.lastName = this.password = "";
        this.dni = null;
    }
}