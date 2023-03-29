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
export class SalleService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7211';

  getSalles(){
    return this.http.get<any>(this.apiUrl+"/Salle/GetAllSalle");
  }
  addSalle(credentials : any){
    return this.http.post<any[]>(this.apiUrl+"/Salle/AddSalle" ,credentials, httpOptions);
  }
  deleteSalle(salle_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Salle/DeleteSalleById?id="}${salle_id}`);
      
    }

}
