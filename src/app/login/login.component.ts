import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  constructor(
    private router: Router,
    private http: HttpClient,
    private formbuilder: FormBuilder,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required],
    });
  }
  goToBody = () => {};

  loginSubmit(email: string, pwd: string) {
    this.http.get<any>('http://localhost:3000/login').subscribe((res) => {
      const user = res.find((a: any) => {
        return a.email === email && a.password === pwd;
      });
      console.log(Object.keys(user));
      if (Object.keys(user).length) {
        this.router.navigate(['body']);
      }

      this.api.loggedInUserType = user['type'];
    });
  }
}
