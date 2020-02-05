import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SERVER} from '../../shared/const/server-address';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient: HttpClient) { }


  getProjectsList(): Observable<string[]> {
    return this.httpClient.post<string[]>(SERVER + '/api/update/list_projects', '');
  }




}
