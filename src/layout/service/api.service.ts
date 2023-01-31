import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: any = "http://localhost:3000/posts" ;

  constructor(private http : HttpClient) { }

  addEmployee(data:any)
  {
      return this.http.post(this.url , data)
  }

  getEmployee()
  {
    return this.http.get(this.url)
  }
}
