import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
import { AppModule } from './app.module';


const routes: Routes = [
  {
    path :'', component : AppLayout,
    children:[
      {path:'',component: AppModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
