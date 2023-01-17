import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {
  // Name = "";
  // Description = "";
  // Method = "";
  // Author = "";
  // Ingredients = "";
  

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void { }
    
    my() {
      
      // console.log(this.registerForm.get('uname')?.errors);
  
      
    
      // alert("signin clicked")
     
    //   var Name = this.Name;
    //   var Description = this.Description;
      
    //   var Method = this.Method;
    //   var Author = this.Author;
    //  var Ingredients=this.Ingredients
     
      // this.api.my(Name, Description, Author, Ingredients, Method)
      //     .subscribe((result: any) => {
      //       alert(result.message);
           
      //       // this.router.navigateByUrl('')
      //     },
      //       // result => {
      //       //   alert(result.error.message)
      //       // }
      //     )
      }
    }


  


