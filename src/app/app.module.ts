import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule}from '@angular/common/http';
import { DashboardComponent } from './dishes/dashboard/dashboard.component';
import { DishesModule } from './dishes/dishes.module';

import { ViewComponent } from './dishes/view/view.component';

import { RecipieComponent } from './dishes/recipie/recipie.component';









@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    
    
    
  
   
   
   

    
   
    
  
   

  
  
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DishesModule
   
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
