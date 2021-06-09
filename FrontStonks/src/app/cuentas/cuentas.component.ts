import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { Board } from '../models/board';
import { BoardService } from '../service/board.service';
import { FormsComponent } from './forms.component';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements OnInit {
  sideBarOpen=true
  boards: Array<Board>[];
  constructor(public dialog: MatDialog, private boardService:BoardService, private appComponent:AppComponent) { }

  ngOnInit(): void {
    this.getBoard();
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(FormsComponent);
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

}
