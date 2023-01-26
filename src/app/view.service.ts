import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  viewarray: any = [];
  savearray: any = [];
  viewlist = new BehaviorSubject([])
  savelist = new BehaviorSubject([])

  constructor() { }

  
  addview(dishes: any) {
    this.viewarray.push(dishes);
    this.viewlist.next(this.viewarray)

    // console.log(this.viewlist);
    
   
   
    
    
  }
  
  save(dishes: any) {
    this.savearray.push(dishes);
    this.savelist.next(this.savearray)
    // console.log(this.savelist);
  }
  removeall() {
    this.viewarray = [];
    this.viewlist.next(this.viewarray)
  
  }
  clear() {
    window.location.reload
   
}
}