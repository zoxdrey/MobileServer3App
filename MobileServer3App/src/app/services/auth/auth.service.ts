import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {shareReplay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string) {
    return this.http.post<User>('http://localhost:8082/api/auth/login', {login , password})
      .subscribe((resp: any) => {
        this.router.navigate(['home']);
        localStorage.setItem('auth_token', resp.token);
      });
  }
}
