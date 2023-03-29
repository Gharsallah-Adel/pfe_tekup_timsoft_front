import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
 'Content-Type': 'application/json'
})
};

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private apiUrl = 'https://localhost:7211';
  

constructor(private http: HttpClient, private router: Router) {
}

getDepartements(){
 return this.http.get<any>(this.apiUrl+"/Departement/GetAllDepartements");
}

addDepartement(credentials : any){
  return this.http.post<any>(this.apiUrl+"/Departement/AddDepartement" ,credentials, httpOptions);
}

deleteDepartement(departement_id : any): Observable<any> {
   
  return this.http.delete(`${this.apiUrl+"/Departement/DeleteDepartement?id="}${departement_id}`);
    
  }
  GetDepartementsCount(){
    return this.http.get<any>(this.apiUrl+"/Departement/GetDepartementCount");
  }
  updateDepartement(departement_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Departement/UpdateDepartmentById?id="}${departement_id}`);
      
  
  }


}
