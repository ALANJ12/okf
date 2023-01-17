import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DishesComponent } from './dishes.component';
const options = {
  headers:new HttpHeaders()
}
@Injectable({
  providedIn: 'root'
})

export class ApiService {
 
  searchkey=new BehaviorSubject('')
  // searchkey=new BehaviorSubject('')
 

  constructor(private http: HttpClient) { }
  getdishes() {
    return this.http.get('http://localhost:3000/all-dishes')
  }
//  addtoview(dishes:any) {
//     const body = {
//       Author: dishes.Author,
//       Name: dishes.Name,
     
//       Description: dishes.Description,
//       url:dishes.url,
//       Method:dishes.Method
      
//     }
    
//     return this.http.post('http://localhost:3000/addtoview', body)
    
//  }
//  getview() {
//   return this.http.get('http://localhost:3000/getview')
  
// }

}
