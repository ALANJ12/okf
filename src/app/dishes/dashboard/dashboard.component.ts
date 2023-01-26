import { Component, OnInit, Pipe,   } from '@angular/core';
import { Router } from '@angular/router';



import { ApiService } from '../api.service';
import { ViewService } from '../../view.service';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

  

export class DashboardComponent implements OnInit {

  USER = ""


  alldishes: any = [];

  viewitems: any;
  searchterm: string = ''
  term: any;
  Name: any;




  constructor(private api: ApiService, private router: Router, private view: ViewService,) {
    if (localStorage.getItem('currentUser')) {
      this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
    }
  }
  
  ngOnInit(): void {
    if (!localStorage.getItem('currentUser')) {
      alert("please login first");
      this.router.navigateByUrl('');
    }
    this.api.getdishes().subscribe((data: any) => {
    
    
    
      this.alldishes = data.dishes
    })
    
    
    
    // this.view.viewlist.subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.viewitems=data;
        
    //   })
 
   
  }
 
     
  



  addview(dishes: any) {
    this.view.removeall()
    this.view.addview(dishes)
  
    this.router.navigateByUrl('view')
  
    // this.router.navigateByUrl('dashboard')
    
    
    
    
    
  }
  logout() {
    localStorage.removeItem('currentUser');
   
    this.router.navigateByUrl('')

  }
}

   



  // save(dishes: any) {
  //   this.view.save(dishes)
  
  // alert("saved sucessfully")
    
  

 

  
  
    



