import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import { each } from 'highcharts';

export interface tablaData {
  producto: string;
  TEA: number;
  total: number;
  mensual: number;
  minimo: number;
}

const ELEMENT_DATA: tablaData[] = [
  {producto:'BBVA', TEA : 0.10 , total: 0.0, mensual: 0.0, minimo: 1000},
  {producto:'BCP', TEA : 0.25, total: 0.0, mensual:0.0 , minimo:2000 },
  {producto:'Scotiabank', TEA : 0.40 , total: 0.0, mensual: 0.0, minimo: 1000},
  {producto:'Interbank', TEA :0.50 , total: 0.0, mensual: 0.0, minimo: 1000 },
  {producto:'Banco GNB', TEA : 1.75, total: 0.0 , mensual: 0.0, minimo: 1000},
  {producto:'Banco Falabella', TEA : 2.00, total: 0.0, mensual: 0.0, minimo: 1000},
  {producto: 'Caja Cusco', TEA : 3.65, total: 0.0, mensual: 0.0, minimo: 500},
];

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.css']
})
export class ComparadorComponent implements OnInit {
  sideBarOpen=true;
  displayedColumns: string[] = ['producto','tea','total', 'mensual', 'minimo'];
  dataToDisplay = [...ELEMENT_DATA];
  dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor() { }

  clickMessage = '';
  isShown: boolean = false ;

  onClickMe() {
    var monto = parseFloat((<HTMLInputElement>document.getElementById("balance")).value);
    var dias = parseFloat((<HTMLInputElement>document.getElementById("days")).value); 
    var temp;
    console.log(monto, dias)
    for( var val of ELEMENT_DATA){
      temp = ((monto * (1 + (val.TEA/100)))^(dias/360)).toFixed(2)
      val.total = temp - monto;
      val.mensual = parseFloat(((temp - monto) / 12).toFixed(2));
    }
    this.dataToDisplay = [...ELEMENT_DATA];
    this.dataSource.setData(this.dataToDisplay);
    
    this.isShown = ! this.isShown;
  }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }
  
}
class ExampleDataSource extends DataSource<tablaData> {
  private _dataStream = new ReplaySubject<tablaData[]>();

  constructor(initialData: tablaData[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<tablaData[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: tablaData[]) {
    this._dataStream.next(data);
  }
}
