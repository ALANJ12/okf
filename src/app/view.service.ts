import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  viewarray: any = [];
  viewlist = new BehaviorSubject([])

  constructor() { }

  
  addview(dishes: any) {
    this.viewarray.push(dishes);
    this.viewlist.next(this.viewarray)
    console.log(this.viewlist);
   
   
    
    
  }
  removeall() {
    this.viewarray = [];
    this.viewlist.next(this.viewarray)
  
  }
}