import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishesComponent } from './dishes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewComponent } from './view/view.component';

import { RecipieComponent } from './recipie/recipie.component';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    DishesComponent,
   
    ViewComponent,
   
    RecipieComponent,
    DashboardComponent,
    FilterPipe,
   
   
   
   
   
   
    
   
  ],
  imports: [
    CommonModule,
    DishesRoutingModule,
    HttpClientModule
  ]
})
export class DishesModule { }
