import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import('./compYmods/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:"login",
    loadChildren:()=>import('./compYmods/login/login.module').then(m=>m.LoginModule)
  },
  {
    path:"**",
    redirectTo:"/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
