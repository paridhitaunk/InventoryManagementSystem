import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-report-quality',
  templateUrl: './report-quality.component.html',
  styleUrls: ['./report-quality.component.css']
})
export class ReportQualityComponent {
  constructor(private DialogRef:DialogRef, @Inject(MAT_DIALOG_DATA) public Data:any){}
}
