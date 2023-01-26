import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ViewService } from 'src/app/view.service';
import { ApiService } from '../api.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit {
  saveitems: any = []
  USER = ""
  FF = ""
  USER1 = ""
  a = ""
  alldishes: any = [];
  router: any;

  constructor(private view: ViewService,private api:ApiService,private ds:DataService ) {  if (localStorage.getItem('currentUser')) {
    this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
  } 
   
 
  }
  ngOnInit(): void {
    this.view.savelist.subscribe(
      (data: any) => {
        // console.log(data);
        this.saveitems = data;
        
          
      })
   
    
  

    // ngOnInit(): void {
  
     
    
  
  
   
  }
  // save(dishes: any,) {

  //   this.view.save(dishes)
  
  
  // }
  addview(dishes: any) {
    this.view.addview(dishes)
  

    
    
    
    
  }
 

}
