import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private server = 'http://localhost:8082';

  constructor(private httpClient: HttpClient) { }


  getProjectsList(): Observable<string[]> {
    return this.httpClient.post<string[]>(this.server + '/api/update/list_projects', '');
  }

  getSettings(projectName: string) {
    return this.httpClient.post(this.server + '/api/settings/upload', {
      project : projectName
    });
  }

  getUpdate(projectName: string) {
    return this.httpClient.post(this.server + '/api/update/list_updates', {
      project : projectName
    });
}
}
