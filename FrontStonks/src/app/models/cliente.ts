export class Cliente {
    id: number;
    dni: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    constructor() {
        this.firstName = this.lastName = this.email = this.password ="";
        this.dni = null;
    }
}