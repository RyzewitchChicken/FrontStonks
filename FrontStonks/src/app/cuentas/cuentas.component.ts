
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Board } from '../models/board';
import { Cuentas } from '../models/cuentas';
import { BoardService } from '../service/board.service';
import { CuentasService } from '../service/cuentas.service';


@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  sideBarOpen=true
  board=new Board();
  boards: Array<Board>[];
  accounts: Array<Cuentas>[];
  account=new Cuentas();
  constructor(private formBuilder:FormBuilder, public dialog: MatDialog, private boardService:BoardService, private appComponent:AppComponent, private cuentasService:CuentasService) { }
  
  registerForm = this.formBuilder.group({
    name:[''],

  });
  accountForm=this.formBuilder.group({
    capital:[''],
    tea:[''],
    mintea:[''],
    dateStart:[''],
    dateEnd:['']
  });
  ngOnInit(): void {
    this.getBoard();
    this.getAccount();
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
  openDialog_account(templateRef:TemplateRef<any>) {
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

  getAccount() {
    this.cuentasService.GetAccount(this.appComponent.acountID).subscribe(
      (data:Cuentas[])=>{
        this.accounts=data['content'];
        console.table(this.accounts);
      }
    )
  }
  postAccount() {
    this.account.capital=this.accountForm.value.capital;
    this.account.tea=this.accountForm.value.tea;
    this.account.mintea=this.accountForm.value.mintea;
    this.account.dateStart=this.accountForm.value.dateStart;
    this.account.dateEnd=this.accountForm.value.dateEnd;
    this.cuentasService.PostAccount(this.account,1).subscribe(
      data=>{
        this.getAccount();
      }
    );
  }
}


