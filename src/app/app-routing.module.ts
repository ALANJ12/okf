import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dishes/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { SigninComponent } from './signin/signin.component';
import { ViewComponent } from './dishes/view/view.component';


const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view', component: ViewComponent },
 

  
  { path: 'dishes', loadChildren: () => import('./dishes/dishes.module').then(m => m.DishesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
