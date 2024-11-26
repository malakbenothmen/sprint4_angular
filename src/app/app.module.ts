import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { AddVoyageComponent } from './add-voyage/add-voyage.component';
import { FormsModule } from '@angular/forms';
import { UpdateVoyageComponent } from './update-voyage/update-voyage.component';
import { HttpClientModule  } from '@angular/common/http';
import { RechercheParTypeComponent } from './recherche-par-type/recherche-par-type.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';



@NgModule({
  declarations: [
    AppComponent,
    VoyagesComponent,
    AddVoyageComponent,
    UpdateVoyageComponent,
    RechercheParTypeComponent,
    RechercheParDestinationComponent,
    SearchFilterPipe,
    ListeTypesComponent,
    UpdateTypeComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
