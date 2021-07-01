import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from 'src/app/app.component';
import { Cuentas } from 'src/app/models/cuentas';
import { Goals } from 'src/app/models/goal';
import { Transaction } from 'src/app/models/transaction';
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
  transactions:Array<Transaction>[];
  constructor(private cuentasService:CuentasService, private appComponent:AppComponent, private transactionService:TransactionService, private goalsService:GoalsService) { }

  ngOnInit() {
    this.getAccount();
    this.getTransactions();
    this.getGoals();
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
  getAccount() {
    this.cuentasService.GetAccount(this.appComponent.acountID).subscribe(
      (data:Cuentas[])=>{
        this.accounts=data['content'];
        console.table(this.accounts);
      }
    )
  }
  getTransactions(){
    
    
    this.transactionService.getAllGastosByUserId(this.appComponent.acountID).subscribe(
      (data: Transaction[])=>{
        this.transactions=data['content'];
        
      }
    );
    
  }
  getGoals(){

    this.goalsService.getGoals(this.appComponent.acountID).subscribe(
      (data: Goals[])=>{
        this.goalsList = data['content'];
        console.table(this.goalsList);
      }
    )
  }

}
