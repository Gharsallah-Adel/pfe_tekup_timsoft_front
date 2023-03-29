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
export class FormationService {

  
  private apiUrl = 'https://localhost:7211';
  

   constructor(private http: HttpClient, private router: Router) {
  }

  getFormations(){
    return this.http.get<any>(this.apiUrl+"/Formation/GetAllFormations");
  }
  addFormation(credentials : any){
    return this.http.post<any[]>(this.apiUrl+"/Formation/AddFormation" ,credentials, httpOptions);
  }
  deleteFormation(formation_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Formation/DeleteFormationById?id="}${formation_id}`);
  }
  GetFormationsCount(){
    return this.http.get<any>(this.apiUrl+"/Formation/GetFormationCount");
  }
  


}
