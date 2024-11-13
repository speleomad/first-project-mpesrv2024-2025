import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"signin", component:SigninComponent},
  {path:"**", component:NotFoundComponent}
  /*{path:"", redirectTo:"about", pathMatch:'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
