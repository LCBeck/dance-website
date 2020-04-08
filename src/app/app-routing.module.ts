import { PrimaryPageComponent } from './primary-page/primary-page.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  
  { path: "", component: RegistrationComponent },
  { path: "", component: PrimaryPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
