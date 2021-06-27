import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '../app.component';
import { TransactionService } from '../service/transaction.service';
import {Transaction} from '../models/transaction'
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from '../service/board.service';
import { Board } from '../models/board';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
  sideBarOpen=true;
  displayedColumns: string[] = ['position','tipo','fecha', 'capital', 'monto'];
  dataSource = new MatTableDataSource<Transaction>([]);
  boards:Array<Board>[];
  
  constructor(private dialog:MatDialog, private appComponent:AppComponent, private transactionService:TransactionService,
    private boardService:BoardService) {
    this.getTransaction();
    this.getBoard();
   }
  boardID:Number;
  ngOnInit(): void {
    // this.getTransaction();
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
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

  getTransaction(){
    
    // console.log(this.appComponent.acountID);
    // this.appComponent.acountID
    this.boardID=this.boardID;
    this.transactionService.getAllGastosByUserId(this.boardID).subscribe(
      (data: Transaction[])=>{
        this.dataSource.data = data;
        console.log(this.dataSource.data['content']);
      }
    );
    
  }
}
