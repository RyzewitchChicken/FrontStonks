import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Board } from '../models/board';
import { BoardService } from '../service/board.service';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  sideBarOpen=true
  board=new Board();
  boards: Array<Board>[];
  constructor(private formBuilder:FormBuilder, public dialog: MatDialog, private boardService:BoardService, private appComponent:AppComponent) { }
  
  registerForm = this.formBuilder.group({
    name:[''],

  });
  ngOnInit(): void {
    this.getBoard();
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(FormsComponent);
  // }
  openDialog(templateRef: TemplateRef<any>) {
    this.dialog.open(templateRef);
  }
  getBoard(){
    // this.appComponent.acountID
    this.boardService.GetBoards(this.appComponent.acountID).subscribe(
      (data: Board[])=>{
        this.boards = data['content'];
        console.table(this.boards);
      }
    )
  }
  PostBoard() {
    
    this.board.name= this.registerForm.value.name;
    this.boardService.PostBoards( this.board,this.appComponent.acountID).subscribe(
      data=>{
        this.getBoard();
      }
    );
  } 
}


