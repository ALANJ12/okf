import { Component, OnInit,   } from '@angular/core';
import { Router } from '@angular/router';



import { ApiService } from '../api.service';
import { ViewService } from '../../view.service';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {


  alldishes: any = [];
  searchterm: string = '';
 





  

  constructor(private api: ApiService, private router: Router, private view: ViewService,) { }
  
  ngOnInit(): void {
    this.api.getdishes().subscribe((data: any) => {
      this.alldishes = data.dishes
    })
    this.api.searchkey.subscribe((data: any) => {
      this.searchterm=data
    })
   
  
    
    // this.view.viewlist.subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.viewitems=data;
        
    //   })
    
    // this.api.searchkey.subscribe((data: any) => {
    //   this.searchterm = data
    // })
   
  }


  addview(dishes: any) {
    this.view.addview(dishes)
  
    this.router.navigateByUrl('view')
    
  }
  search(event: any) {
    let searchkey = event.target.value
    this.api.searchkey.next(searchkey)
  }

 

  }
   
    



