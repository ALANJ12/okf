import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = ""
  pswd = ""
  loginForm = this.fb.group({
  
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })


  aim = "Your perfect banking partner"
  account = "Enter your account number"


  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  emailChange(event: any) {
    console.log(event);
    this.email = event.target.value;
    console.log(this.email);
    
  }
  pswdChange(event: any) {
    console.log(event);
    this.pswd = event.target.value;
    console.log(this.pswd);
    

  }
  login() {
    var email = this.loginForm.value.email;
    var pswd = this.loginForm.value.pswd;
   
    if (this.loginForm.valid) {
      this.ds.login(email, pswd)
   
      
        .subscribe((result: any) => {
          localStorage.setItem('currentUser', JSON.stringify(result.currentUser))
          localStorage.setItem('currentemail', JSON.stringify(result.currentemail))
          localStorage.setItem('token', JSON.stringify(result.token))
          alert(result.message);
          this.router.navigateByUrl('dashboard')
        },
          result => {
            alert(result.error.message)
          })


    }
  
  
  }
}
