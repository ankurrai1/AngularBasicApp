import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";

import { AuthGuard } from "./auth.guard";


const routes: Routes = [

  {
    path:"",
    component:HomeComponent
  },
  {
    path:"data",
    component:DataComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"pipe",
    component:PipeExampleComponent,
  },
  {
    path:"admin",
    component:AdminComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
