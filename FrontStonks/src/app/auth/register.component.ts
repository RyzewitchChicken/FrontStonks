import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
