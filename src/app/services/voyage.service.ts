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
  types! : Type[];


  constructor(private http : HttpClient) {
   /* this.types = [
      { idType: 1, nomType: 'Type A', descriptionType: 'Description du type A' },
      { idType: 2, nomType: 'Type B', descriptionType: 'Description du type B' },
      { idType: 3, nomType: 'Type C', descriptionType: 'Description du type C' },
      { idType: 4, nomType: 'Type D', descriptionType: 'Description du type D' }
    ];*/

    /*this.voyages = [ {
      idVoyage: 1,destination: "Paris",dateDepart: new Date("2024-06-01"),dateRetour: new Date("2024-06-10"), prixVoyage: 1200.00,
      nbPersonnes: 2,moyTransport: "Avion",description: "Séjour à Paris avec visite de la Tour Eiffel." ,
      type :  { idType: 2, nomType: 'Type B', descriptionType: 'Description du type B' },
    },
    {
      idVoyage: 2,destination: "New York",dateDepart: new Date("2024-07-15"), dateRetour: new Date("2024-07-22"),prixVoyage: 1500.00,
      nbPersonnes: 4,moyTransport: "Train",description: "Exploration de New York et ses attractions.",
      type : { idType: 1, nomType: 'Type A', descriptionType: 'Description du type A' },
    },
    {
      idVoyage: 3,destination: "Tokyo",dateDepart: new Date("2024-08-05"),dateRetour: new Date("2024-08-12"),prixVoyage: 2000.00,
      nbPersonnes: 1,moyTransport: "Avion",description: "Séjour à Tokyo pour découvrir la culture japonaise.",
      type : { idType: 2, nomType: 'Type B', descriptionType: 'Description du type B' },
    }
    ];*/
   }

   /*listeVoyages():Voyage[] {
    return this.voyages ;
   }*/

    listeVoyages(): Observable<Voyage[]>{
      return this.http.get<Voyage[]>(apiURL);
      }

   /*ajouterVoyage(voy :Voyage){
    this.voyages.push(voy);
   }*/

    ajouterVoyage( voy: Voyage):Observable<Voyage>{
      return this.http.post<Voyage>(apiURL, voy, httpOptions);
      }

  /* supprimerVoyage( voy: Voyage){
 
    const index = this.voyages.indexOf(voy, 0);
    if (index > -1) {
    this.voyages.splice(index, 1);
    }
    }); 
    }  */

    supprimerVoyage(id : number) {
      const url = `${apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
      


   /* consulterVoyage(id:number): Voyage{
      return this.voyages.find(v => v.idVoyage == id)!;
      }*/

      consulterVoyage(id: number): Observable<Voyage> {
        const url = `${apiURL}/${id}`;
        return this.http.get<Voyage>(url);
      }
        

      trierVoyages(){
        this.voyages = this.voyages.sort((n1,n2) => {
        if (n1.idVoyage! > n2.idVoyage!) {
        return 1;
        }
        if (n1.idVoyage! < n2.idVoyage!) {
        return -1;
        }
        return 0;
        });
      }
        


    /*updateVoyage(v:Voyage)
    {
    // console.log(v);
   // this.supprimerVoyage(v);
    this.ajouterVoyage(v);
    this.trierVoyages(); 
    }*/

    updateVoyage(voy :Voyage) : Observable<Voyage>
    {
    return this.http.put<Voyage>(apiURL, voy, httpOptions);
    }




   /* listeTypes():Type[] {
      return this.types;
      }*/

      consulterType(id:number): Type{ 
      return this.types.find(cat => cat.idType == id)!;
      }

      listeTypes():Observable<TypeWrapper>{
        return this.http.get<TypeWrapper>(this.apiURLType);
        }


        rechercherParType(id: number):Observable< Voyage[]> {
          const url = `${apiURL}/voystype/${id}`;
          return this.http.get<Voyage[]>(url);
          }

          rechercherParDestination(dest: string):Observable< Voyage[]> {
            const url = `${apiURL}/voysByDestination/${dest}`;
            return this.http.get<Voyage[]>(url);
            }

            ajouterType( tp: Type):Observable<Type>{
              return this.http.post<Type>(this.apiURLType, tp, httpOptions);
              }
              
        
      

    

}
