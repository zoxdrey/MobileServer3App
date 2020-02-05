import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from '../model/device';
import {Observable} from 'rxjs';
import {SERVER} from '../shared/const/server-address';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private body: object = {
    project: 'project2',
    Version: '15'
  };
  constructor(private httpClient: HttpClient) {
  }

  getDevices(): Observable<any> {
    return this.httpClient.post(SERVER + '/api/device/list', this.body);
  }

  getLicenseInfo(deviceUUID: string) {
    return this.httpClient.post(SERVER + '/api/license/download_request', {
      id: deviceUUID
    });
  }
}
