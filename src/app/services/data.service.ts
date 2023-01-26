import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const options = {
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  currentUser = ""
  USER

  

  constructor(private http: HttpClient) {
    if (localStorage.getItem('currentUser')) {
      this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
      if (localStorage.getItem('currentemail')) {
        this.USER = JSON.parse(localStorage.getItem('currentUser') || '');
   
      }
    }
  }
  

  signin(email: any, username: any, pswd: any) {
    const data = {
      email,
      pswd,
      username
    }
    return this.http.post('http://localhost:3000/signin', data)
  }
  login(email: any, pswd: any) {
    const data = {
      email,
      pswd
    }
    return this.http.post('http://localhost:3000/login', data)
  }

  gettoken() {
    const token = JSON.parse(localStorage.getItem('token') || '')
    let headers = new HttpHeaders()
    if (token) {
      options.headers = headers.append('x-access-token', token)
    }
    return options
  }
  my(Name: any, Description: any, Author: any, Ingredients: any, Method: any) {
    const data = {
      Name,
      Description,
      Author,
      Ingredients,
      Method
    }
    return this.http.post('http://localhost:3000/my', data)
  }

  req(dishname: any, suggestion:any,b:any) {
    const data = {
      dishname,
      suggestion,
     b
    }
    return this.http.post('http://localhost:3000/req', data)
  }
  ok(talk:any,a:any) {
    const data = {
      talk,
      a
    }
    return this.http.post('http://localhost:3000/ok', data)
  }
    save(FF:any,GG:any,a:any) {
      const data = {
        FF,
        GG,
        a
      
      }
      return this.http.post('http://localhost:3000/save',data)
    }
  //   gettransaction(FF:any) {  const data = {
  //     FF,
   
  //   }
  //   return this.http.post('http://localhost:3000/transaction',data,this.gettoken())
  //   }
  

  // }}
}