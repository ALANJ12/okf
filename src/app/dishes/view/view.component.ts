import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../view.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  viewitems:any=[]


  constructor(private view:ViewService,private router: Router) { }

  ngOnInit(): void {
    this.view.viewlist.subscribe(
      (data: any) => {
        console.log(data);
        this.viewitems=data;
        
      })
    
  
   
  }
  addview(dishes: any) {
    this.view.addview(dishes)
  }
  removeall()
  {
    this.view.removeall()
      this.router.navigateByUrl('dashboard')
    }
    
  }
  
  


