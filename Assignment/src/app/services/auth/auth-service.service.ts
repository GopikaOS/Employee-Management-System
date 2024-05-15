import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Employee } from 'src/app/addemployee/addemployee';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 

  constructor(private http: HttpClient) { }

  // login(email: string, password: string) {
  //   return this.http.post<any>('/api/login', { email, password })
  //   // this is just the HTTP call, 
  //   // we still need to handle the reception of the token

  // }
  createuser(data: Employee) {
    return this.http.post<Employee>("http://localhost:3000/posts", data);
  }
  getEmployees() {
    return this.http.get<Employee[]>("http://localhost:3000/posts")
  }
  deleteuser(user: any) {
    return this.http.delete("http://localhost:3000/posts/" + user.id)
  }
  updateuser(id:number,data: Employee) {
    return this.http.put<Employee[]>(`http://localhost:3000/posts/${id}`, data);
  }
 
}
