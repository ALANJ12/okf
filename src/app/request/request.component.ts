import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  dishname = ""
  suggestion = ""
  USER = ""
  b=""

  constructor(private ds:DataService) {  if (localStorage.getItem('currentUser')) {
    this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
  }}

  ngOnInit(): void { }
    req(){
      
     
  
      
    

     var b=this.USER
      var dishname = this.dishname;
      var suggestion = this.suggestion;
      
    
     
      this.ds.req(dishname, suggestion,b)
          .subscribe((result: any) => {
            alert(result.message);
           
            // this.router.navigateByUrl('')
          },
            // result => {
            //   alert(result.error.message)
            // }
          )
      }
    }
  


