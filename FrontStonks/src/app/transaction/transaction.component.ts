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
  
  // dataSource  = [
  //   {position: 1, tipo: 'Hydrogen', fecha: 1.0079, capital: 'H'},
  //   {position: 2, tipo: 'Helium', fecha: 4.0026, capital: 'He'},
  //   {position: 3, tipo: 'Lithium', fecha: 6.941, capital: 'Li'},
  //   {position: 4, tipo: 'Beryllium', fecha: 9.0122, capital: 'Be'},
  //   {position: 5, tipo: 'Boron', fecha: 10.811, capital: 'B'},
  //   {position: 6, tipo: 'Carbon', fecha: 12.0107, capital: 'C'},
  //   {position: 7, tipo: 'Nitrogen', fecha: 14.0067, capital: 'N'},
  //   {position: 8, tipo: 'Oxygen', fecha: 15.9994, capital: 'O'},
  //   {position: 9, tipo: 'Fluorine', fecha: 18.9984, capital: 'F'},
  //   {position: 10, tipo: 'Neon', fecha: 20.1797, capital: 'Ne'},
  // ];
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
