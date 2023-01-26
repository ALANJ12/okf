import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dishes/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { SigninComponent } from './signin/signin.component';
import { ViewComponent } from './dishes/view/view.component';
import { RecipieComponent } from './recipie/recipie.component';
import { SavedComponent } from './dishes/saved/saved.component';
import { ChatComponent } from './chat/chat.component';
import { RequestComponent } from './request/request.component';


const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'view', component: ViewComponent },
  {
    path: 'recipie', component: RecipieComponent
  },
   { path: 'saved', component: SavedComponent},
   { path: 'chat', component: ChatComponent},
   { path: 'request', component: RequestComponent},

  
  { path: 'dishes', loadChildren: () => import('./dishes/dishes.module').then(m => m.DishesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
