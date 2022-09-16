import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  public blogList: any = [];
  public loggedInUserType: string = '';
  getBlog() {
    this.http.get('http://localhost:3000/blog').subscribe((res) => {
      console.log(res);
      this.blogList = res;
    });
  }
  
}
