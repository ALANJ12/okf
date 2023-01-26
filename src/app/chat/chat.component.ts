import { Component, OnInit } from '@angular/core';
import { ApiService } from '../dishes/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  cc: any = [];
  USER = ""
  

  constructor(private ds: DataService, private api: ApiService) {  if (localStorage.getItem('currentUser')) {
    this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
  }
  
   }

 
  ngOnInit(): void {
   
  this.api.gettalk().subscribe((data: any) => {
    
    
    
    this.cc = data.chat
  })
 
    
  }
  scrollToBottom() {
    throw new Error('Method not implemented.');
  }
  talk = ""
  a=""

  ok() {
      
     
  
      
    

     var a=this.USER
    var talk = this.talk;
 
   
    this.ds.ok(talk,a)
        .subscribe((result: any) => {
          // alert(result.message);
          console.log(a);
          this.ngOnInit()
          
         
          // this.router.navigateByUrl('')
        },
          // result => {
          //   alert(result.error.message)
          // }
        )
    }
  }




