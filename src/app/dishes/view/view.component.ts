import { Component, OnInit } from '@angular/core';
import { ViewService } from '../../view.service';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
 
  viewitems: any = []
  saveitems: any = []
  USER = ""
  FF = ""
  USER1 = ""
  GG = ""
  M = ""
  a = ""
  B = ""
  alldishes: any = [];
  dishes: any;
  
   





  constructor(private view: ViewService, private router: Router, private api: ApiService, private ds: DataService) {
    if (localStorage.getItem('currentUser')) {
      this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
   
    } if (localStorage.getItem('currentUser')) {
      this.USER1 = JSON.parse(localStorage.getItem('currentemail') || '');
   
    }
  }
  ngOnInit(): void {
    this.view.viewlist.subscribe(
      (data: any) => {
        // console.log(data);
        this.viewitems = data;
       
        
      })
      this.view.savelist.subscribe(
        (data: any) => {
          // console.log(data);
          this.saveitems = data.ok;
          
          
            
        })
  
    
    
  
   
  }
  addview(dishes: any) {
    this.view.addview(dishes)
   
   

   
  }
  // save(dishes: any,FF:any) {
  //   this.api.save(dishes,FF).subscribe((result: any) => {
  //     var FF = this.USER
  //     alert(result.message)
  //   },
  //   (result: any) => {
  //     alert(result.error.message)
  //   })
  // }
 


  save(dishes: any) {
    
    this.view.save(dishes)

    var GG = this.USER1
    var a = this.saveitems
    var FF=this.USER
    // alert("saved sucessfully")
    // console.log(a);
    if (FF == this.USER) {
  
      this.ds.save(FF, GG, a)
        .subscribe((result: any) => {
          alert(result.message)
        },
          result => {
            alert(result.error.message)
          }
        )
    }
  }
    
  //   // this.router.navigateByUrl('saved')
  //   // this.api.getdishes().subscribe((data: any) => {
  //   //   this.alldishes = data.dishes
  //   // })
    
   
   
  //   // var M = this.alldishes.Name;
  //   // var A=this.alldishes.Author
  //   // var B=this.alldishes.Description
  //   // this.view.save(dishes)
  //   // var FF = this.USER
  //   // var GG = this.USER1
  //   // var a = this.saveitems
  //   alert("saved sucessfully")
  //   // console.log(a);
    
  //   // console.log(M);
  //   // console.log(A)
  //   // console.log(B)
    
  //   // if (FF==this.USER) {
    
  //   //   this.ds.save(FF, GG, a)
  //   //     .subscribe((result: any) => {
  //   //       alert(result.message)
  //   //     },
  //   //       result => {
  //   //         alert(result.error.message)
  //   //       }
  //   //     )
  //   // }
   
    
    
    
  //   // }
    
  //   }

 
  
  
  }


