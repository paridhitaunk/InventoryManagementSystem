import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MakePaymentComponent } from '../make-payment/make-payment.component';
import { ReportQualityComponent } from '../report-quality/report-quality.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  actions: string; 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',actions:'1'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',actions:'2'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',actions:'3'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',actions:'4'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',actions:'5'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',actions:'6'},

];
interface IOrderStatus {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',"actions"];
  dataSource = ELEMENT_DATA;
  orderStatus: IOrderStatus[] = [
    {value: '1', viewValue: 'Delivered'},
    {value: '2', viewValue: 'Pending'},
    {value: '3', viewValue: 'Canceled'},
  ];
  constructor(public dialog: MatDialog){}
  makePaymentDialog(element:any){
    const dialogRef=this.dialog.open(MakePaymentComponent,{data:element});
      //console.log(id);
  }
  reportQualityIssue(element:any){
    const dialogRefForIssue=this.dialog.open(ReportQualityComponent,{data:element});
  }
}
