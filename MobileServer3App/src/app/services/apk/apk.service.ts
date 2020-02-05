import { Injectable } from '@angular/core';
import {SERVER} from '../../shared/const/server-address';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApkService {

  constructor(private httpClient: HttpClient) { }

  getUpdate(projectName: string) {
    return this.httpClient.post(SERVER + '/api/update/list_updates', {
      project : projectName
    });
  }
}
