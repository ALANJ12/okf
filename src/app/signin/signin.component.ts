import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  uname = ""
  email = ""
  pswd = ""
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
   
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })
  aim = "Your perfect dish made simple"

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  
  }
  signin() {
    console.log(this.registerForm);
   

    
  
    // alert("signin clicked")
    var username = this.registerForm.value.uname;
    var email = this.registerForm.value.email;
    var password = this.registerForm.value.pswd;
    if (this.registerForm.valid) {
     
      
      console.log(this.registerForm.get('uname')?.errors);
      this.ds.signin(email, username, password)
        .subscribe((result: any) => {
          alert(result.message);
          this.router.navigateByUrl('login')
        },
                   result => {
            alert(result.error.message)
          }
        )
    }
  }
}
