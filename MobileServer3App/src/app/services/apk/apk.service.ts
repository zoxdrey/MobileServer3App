import { Injectable } from '@angular/core';
import {SERVER} from '../../shared/const/server-address';
import {HttpClient} from '@angular/common/http';
import { Apk } from 'src/app/model/apk';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApkService {

  constructor(private httpClient: HttpClient) { }

  getUpdate(projectName: string) : Observable<Apk[]> {
    return this.httpClient.post<Apk[]>(SERVER + '/api/update/list_updates', {
      project : projectName
    });
  }

  uploadApkFile(projectName: string, updateFile: string, version: string){
    return this.httpClient.post(SERVER + '/api/update/upload_update', {
      project: projectName,
      update: updateFile,
      version: version
    })
  }
}
