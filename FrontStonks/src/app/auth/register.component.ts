import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged = false;
  cliente = new Cliente();
  hide = true;
  password_confirm:string
  password_check:string
  constructor(private formBuilder:FormBuilder,private clientService: ClienteService,private router:Router){}
  registerForm = this.formBuilder.group({
    dni:[''],
    name:[''],
    lastName: [''],
    phone:[''],
    address:[''],
    userName:[''],
    password:[''],
    checkPassword:[''],
    country:[''],
  });

  ngOnInit(): void {
  }
  registerClient(){
    this.password_confirm = this.registerForm.value.password;
    this.password_check = this.registerForm.value.checkPassword;

    this.cliente.dni = Number(this.registerForm.value.dni);
    this.cliente.firstName = this.registerForm.value.name;
    this.cliente.lastName = this.registerForm.value.lastName;
    this.cliente.phone = this.registerForm.value.phone;
    this.cliente.username = this.registerForm.value.userName;
    if(this.password_confirm==this.password_check && this.password_confirm!=""&& this.password_check!="" ){
      this.cliente.password = this.registerForm.value.password;
    }else{
      return alert("poner contraseña");
    }
    this.cliente.address = this.registerForm.value.address;
    this.cliente.country = this.registerForm.value.country;
    // const new_client ={
    //   dni: this.cliente.dni,
    //   firstName: this.cliente.firstName,
    //   lastName: this.cliente.lastName,
    //   phone: this.cliente.phone,
    //   address: this.cliente.address,
    //   username: this.cliente.username,
    //   password: this.cliente.password,
    //   country: this.cliente.country
    // };
    this.clientService.registerClient(this.cliente).subscribe(
      data=>{
        this.router.navigate(['/']);
      }
    );
    // console.log(this.cliente);

  }
  

}
