import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  cliente = new Cliente();
  // userName : String;
  // password: String;
  constructor(private formBuilder: FormBuilder, private clientService: ClienteService,private router:Router) { }
  profileForm = this.formBuilder.group({
    userName: [''],
    password: [''],
  });

  ngOnInit(): void {
  }
  login() {
    this.cliente.username = this.profileForm.value.userName;
    this.cliente.password = this.profileForm.value.password;
    this.clientService.getCliente(this.cliente).subscribe(data => {
      
      if (data) {
        console.log(data);
        this.router.navigate(['/main']);
        // this.isLogged = true;
      }else{
        console.log("no se puede entrar");
      }
    });
  }

}
