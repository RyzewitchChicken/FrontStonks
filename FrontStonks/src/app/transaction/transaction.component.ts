import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppComponent } from '../app.component';
import { TransactionService } from '../service/transaction.service';
import {Transaction} from '../models/transaction'
import { Cliente } from '../models/cliente';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})

export class TransactionComponent implements OnInit {
  sideBarOpen=true;
  displayedColumns: string[] = ['position','tipo','fecha', 'capital', 'monto'];
  dataSource = new MatTableDataSource<Transaction>([]);
  constructor(private appComponent:AppComponent, private transactionService:TransactionService) {
    this.getTransaction();

   }
  
  ngOnInit(): void {
    // this.getTransaction();
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
  getTransaction(){
    
    // console.log(this.appComponent.acountID);
    // this.appComponent.acountID
    this.transactionService.getAllGastosByUserId(this.appComponent.acountID).subscribe(
      (data: Transaction[])=>{
        this.dataSource.data = data;
        console.log(this.dataSource.data['content']);
      }
    );
    
  }
}
