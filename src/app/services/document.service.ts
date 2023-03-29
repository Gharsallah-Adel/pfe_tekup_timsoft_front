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
export class DocumentService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7211';

  getDocuments(){
    return this.http.get<any>(this.apiUrl+"/Document/GetDocuments");
  }
  addDocument(credentials : any){
    return this.http.post<any>(this.apiUrl+"/Document/AddDocument" ,credentials, httpOptions);
  }
  deleteDocument(document_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Document/DeleteDocumentById?id="}${document_id}`);
      
    }
}
