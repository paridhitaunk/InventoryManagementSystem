import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  sourceValue = new BehaviorSubject("");
  currentValue=this.sourceValue.asObservable();
  constructor() { }

  public changeValue(value:string){
    this.sourceValue.next(value);
  }
  
}
