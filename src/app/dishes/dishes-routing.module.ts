import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishesComponent } from './dishes.component';
import { RecipieComponent } from '../recipie/recipie.component';

const routes: Routes = [{
  path: '', component: DishesComponent
},
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule { }
