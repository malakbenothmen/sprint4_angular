import { Injectable } from '@angular/core';
import { Voyage } from '../model/voyage.model';
import { Type } from '../model/type.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { TypeWrapper } from '../model/typeWrapped.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  apiURLType: string = 'http://localhost:8080/voyages/type';


 
  voyages! : Voyage[];
 // types! : Type[];


  constructor(private http : HttpClient) {

   }



    listeVoyages(): Observable<Voyage[]>{
      return this.http.get<Voyage[]>(apiURL+'/all');
      }

 
 }