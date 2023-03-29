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
export class ProjectService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'https://localhost:7211';
  getProjects(){
    return this.http.get<any>(this.apiUrl+"/Project/GetAllProjects");
  }
  addProject(credentials : any){
    return this.http.post<any[]>(this.apiUrl+"/Project/AddProject" ,credentials, httpOptions);
  }
  deleteProject(project_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/Project/DeleteProject?id="}${project_id}`);
  }
}

