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
export class UserApiService {

  private apiUrl = 'https://localhost:7211';
  

   constructor(private http: HttpClient, private router: Router) {
  }

  GetUsersCount(){
    return this.http.get<any>(this.apiUrl+"/User/GetUsersCount");
  }
  getUsers(){
    return this.http.get<any>(this.apiUrl+"/User/GetAllUsers");
  }
  deleteUser(user_id : any): Observable<any> {
   
    return this.http.delete(`${this.apiUrl+"/User/DeleteUser/id?id="}${user_id}`);
      
    }
    addUser(credentials : any){
      return this.http.post<any[]>(this.apiUrl+"/User/AddUser" ,credentials, httpOptions);
    }
    getUserById(user_id : any): Observable<any> {
   
      return this.http.get(`${this.apiUrl+"/User/GetUserById/"}${user_id}`);
        
      }
}
