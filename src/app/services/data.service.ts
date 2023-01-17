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
  currentemail = ""
  

  constructor(private http: HttpClient) { }
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
  // my(Name: any, Description: any, Author: any,Ingredients:any,Method:any) {
  //   const data = {
  //     Name,
  //     Description,
  //     Author,
  //     Ingredients,
  //     Method
  //   }
  //   return this.http.post('http://localhost:3000/my', data)
  // }
}