import { Injectable } from '@angular/core';
import {SERVER} from '../../shared/const/server-address';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  constructor(private httpClient: HttpClient) { }

  getSettings(projectName: string) {
    return this.httpClient.post(SERVER + '/api/settings/upload', {
      project : projectName
    });
  }
}
