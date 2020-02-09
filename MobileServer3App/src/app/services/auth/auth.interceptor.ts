import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');


    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      return next.handle(authReq).pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
            }
          },
          err => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401 || err.status === 403) {
                this.router.navigate(['login']);
              }
            }
          }
        )
      );
    } else {
      return next.handle(req.clone()).pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              console.log('Server response');
            }
          }, err => {
            if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.router.navigate(['login']);
              }
            }
          }
          )
        );
    }
  }

}
