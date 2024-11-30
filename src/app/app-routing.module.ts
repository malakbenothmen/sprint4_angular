import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoyagesComponent } from './voyages/voyages.component';


import { voyageGuard } from './voyage.guard';
import { AuthGuard } from './guards/secure.guard';

const routes: Routes = [
  {path: "voyages", component : VoyagesComponent, canActivate:[AuthGuard], data : {roles:['ADMIN']} }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
