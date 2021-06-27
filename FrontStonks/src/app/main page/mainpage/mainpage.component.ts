import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin, Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { Board } from 'src/app/models/board';
import { Cuentas } from 'src/app/models/cuentas';
import { Goals } from 'src/app/models/goal';
import { Transaction } from 'src/app/models/transaction';
import { BoardService } from 'src/app/service/board.service';
import { CuentasService } from 'src/app/service/cuentas.service';
import { GoalsService } from 'src/app/service/goals.service';
import { TransactionService } from 'src/app/service/transaction.service';





@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})



export class MainpageComponent implements OnInit {
  sideBarOpen=true;
  accounts: Array<Cuentas>[];
  goalsList:Array<Goals>[];
  boards:Array<Board>[];
  transactions:Array<Transaction>[];
  
  
  constructor(private cuentasService:CuentasService, public appComponent:AppComponent, private transactionService:TransactionService, private goalsService:GoalsService, 
    private boardService:BoardService) 
  {
    

  }
  ngOnInit() :void{
    this.getAccount();
    this.getTransactions();
    this.getGoals();
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }

  getTransactions(){
    this.boardService.GetBoards(this.appComponent.acountID).subscribe(datab=>{

    this.transactionService.getAllGastosByUserId(datab['content'][0]["id"]).subscribe(
      (data: Transaction[])=>{
        this.transactions=data['content'];
        console.table(this.transactions);
      }
    );
    })
  }
  getGoals(){

    this.goalsService.getGoals(this.appComponent.acountID).subscribe(
      (data: Goals[])=>{
        this.goalsList = data['content'];
        console.table(this.goalsList);
      }
    )
  }

  getAccount() {
    this.boardService.GetBoards(this.appComponent.acountID).subscribe(datab=>{
      this.cuentasService.GetAccount(datab['content'][0]["id"]).subscribe(
        (data:Cuentas[])=>{
          this.accounts=data['content'];
  
          console.table(this.accounts);
          
        }
      )
    }
    )
  }

}
