import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private server = 'http://localhost:8082';


  constructor(private httpClient: HttpClient) { }
}
