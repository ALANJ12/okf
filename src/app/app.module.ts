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

import { RecipieComponent } from './recipie/recipie.component';

import { SavedComponent } from './dishes/saved/saved.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChatComponent } from './chat/chat.component';
import { RequestComponent } from './request/request.component';
import { FooterComponent } from './footer/footer.component';












@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    
  
    RecipieComponent,

    DashboardComponent,
    ChatComponent,
     RequestComponent,
     FooterComponent,
   
 
   
    
    
    
  
   
   
   

    
   
    
  
   

  
  
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DishesModule,
    Ng2SearchPipeModule
   
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
