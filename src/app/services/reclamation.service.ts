import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
 'Content-Type': 'application/json'
})
};
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7211';

  getReclamations(){

    return this.http.get<any>(this.apiUrl+"/Reclamation/GetAllReclamations");
  }

  addReclamation(credentials : any){
    return this.http.post<any[]>(this.apiUrl+"/Reclamation/AddReclamation" ,credentials, httpOptions);
  }

  deleteReclamation(reclamation_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Reclamation/DeleteReclamationById?id="}${reclamation_id}`);
  }
}

