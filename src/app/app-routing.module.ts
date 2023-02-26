import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';

const routes: Routes = [
  {path:"",redirectTo:"offre",pathMatch:'full'},
  {path:"offre",component:OffresEmploiComponent},
  {path:"AddEmploi",component:FormsComponent},
  {path:"**",component:NotFoundComponent}//doit etre le dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
