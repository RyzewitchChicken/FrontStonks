import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  sideBarOpen=true;
  displayedColumns: string[] = ['position','tipo','fecha', 'capital', 'monto'];
  dataSource  = [
    {position: 1, tipo: 'Hydrogen', fecha: 1.0079, capital: 'H'},
    {position: 2, tipo: 'Helium', fecha: 4.0026, capital: 'He'},
    {position: 3, tipo: 'Lithium', fecha: 6.941, capital: 'Li'},
    {position: 4, tipo: 'Beryllium', fecha: 9.0122, capital: 'Be'},
    {position: 5, tipo: 'Boron', fecha: 10.811, capital: 'B'},
    {position: 6, tipo: 'Carbon', fecha: 12.0107, capital: 'C'},
    {position: 7, tipo: 'Nitrogen', fecha: 14.0067, capital: 'N'},
    {position: 8, tipo: 'Oxygen', fecha: 15.9994, capital: 'O'},
    {position: 9, tipo: 'Fluorine', fecha: 18.9984, capital: 'F'},
    {position: 10, tipo: 'Neon', fecha: 20.1797, capital: 'Ne'},
  ];
  constructor() { }
  
  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
}
