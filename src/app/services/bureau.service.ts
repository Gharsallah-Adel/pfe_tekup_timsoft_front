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
export class BureauService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7211';

  getBureaux(){
    return this.http.get<any>(this.apiUrl+"/Bureau/GetAllBureaus");
  }

  addBureau(credentials : any){
    return this.http.post<any>(this.apiUrl+"/Bureau/AddBureau" ,credentials, httpOptions);
  }
  
  deleteBureau(bureau_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Bureau/DeleteBureau?id="}${bureau_id}`);
      
    }

}
