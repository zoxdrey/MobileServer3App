import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../model/user';
import {shareReplay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {SERVER} from '../../shared/const/server-address';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string) {
    return this.http.post<User>(SERVER, {login , password})
      .subscribe((resp: any) => {
        this.router.navigate(['home']);
        localStorage.setItem('auth_token', resp.token);
        localStorage.setItem('user_name', login);
      });
  }
}
