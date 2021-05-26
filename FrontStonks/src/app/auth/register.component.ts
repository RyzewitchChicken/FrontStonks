import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogged = false;
  name : String;
  userName: String;
  password: String;
  email:String;
  hide = true;
  constructor(private formBuilder:FormBuilder){}
  registerForm = this.formBuilder.group({
    dni:[''],
    userName:[''],
    name:[''],
    password:[''],
    checkPassword:[''],
    email:[''],
  });

  ngOnInit(): void {
  }

}
