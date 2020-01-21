import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from '../model/device';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private server = 'http://localhost:8082/api/device/list';
  private body: object = {
    project: 'project2',
    Version: '15'
  };
  constructor(private httpClient: HttpClient) {
  }

  getDevices(): Observable<any> {
    return this.httpClient.post(this.server, this.body);
  }
}
