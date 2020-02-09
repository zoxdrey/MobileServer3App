import { Injectable } from '@angular/core';
import {SERVER} from '../../shared/const/server-address';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Settings } from 'src/app/model/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


  constructor(private httpClient: HttpClient) { }

  getSettings(projectName: string): Observable<Settings[]> {
    return this.httpClient.post<Settings[]>(SERVER + '/api/settings/upload', {
      project : projectName
    });
  }

  uploadSettingsFile(projectName: string){
    return this.httpClient.post(SERVER + '/api/settings/create', {
      project: projectName,
      version: "1.2.25",
      settings: "gfdgdfgdfg"
    })
  }
}
