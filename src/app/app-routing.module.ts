import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InformationComponent } from './information/information.component';
import { PrimaryPageComponent } from './primary-page/primary-page.component';
import { NgModule, Component, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [
  
  { path: "registration", component: RegistrationComponent },
  { path: "confirmation", component: ConfirmationComponent},
  { path: "information", component: InformationComponent },
  { path: "", component: PrimaryPageComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
