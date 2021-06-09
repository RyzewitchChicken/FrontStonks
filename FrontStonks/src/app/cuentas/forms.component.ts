import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Board } from '../models/board';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  board= new Board();
  boards:Array<Board>[];
  constructor(private formBuilder:FormBuilder, private boardService:BoardService) { }


  registerForm = this.formBuilder.group({
    name:[''],

  });
  ngOnInit(): void {
    
  }




}
