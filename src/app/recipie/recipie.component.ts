import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../dishes/api.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {
  
 

  constructor(private api:ApiService,private router:Router,private ds:DataService) {if (localStorage.getItem('currentUser')) {
    this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
  } }

  ngOnInit(): void { }
  Name = "";
  Description = '';
  Author = '';
  Ingredients = '';
  Method = ""
  USER=""

  


    
    my() {
      
     
  
      
    

     
      var Name = this.Name;
      var Description = this.Description;
      
      var Method = this.Method;
      var Author = this.Author;
     var Ingredients=this.Ingredients
     
      this.ds.my(Name, Description, Author, Ingredients, Method)
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


  


