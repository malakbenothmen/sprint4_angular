import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoyagesComponent } from './voyages/voyages.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule  } from '@angular/common/http';



import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular'

import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

function initializeKeycloak(keycloak: KeycloakService, platformId: Object) {
  return () => {
    if (isPlatformBrowser(platformId)) {
      return keycloak.init({
        config: {
          url: 'http://localhost:8090',
          realm: 'malak-realm',
          clientId: 'voy-app'
        },
        initOptions: {
          onLoad: 'login-required',
          //checkLoginIframe: true,
          //onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
        },
        
      }).then(authenticated => {
        console.log('Keycloak authenticated:', authenticated);
      }).catch(err => {
        console.error('Keycloak initialization error:', err);
      });
    } else {
      return Promise.resolve();
    }
  };
}


@NgModule({
  declarations: [
    AppComponent,
    VoyagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule 
  ],
  providers: [
    { 
      provide: APP_INITIALIZER, 
      useFactory: initializeKeycloak, 
      multi: true, 
      deps: [KeycloakService, PLATFORM_ID] 
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
