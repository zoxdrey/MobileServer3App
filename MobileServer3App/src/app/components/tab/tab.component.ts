import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from '../../model/device';
import {ApiService} from '../../services/api.service';
import {error} from 'util';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  placeholder = 'Enter some';
  data: Device;
  deviceActivationInfo: any;
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
  }


  show(data: Device) {
      this.data = data;
      this.activationInfo(data.uuid);
  }

  activationInfo(deviceUUID: string) {
   this.apiService.getLicenseInfo(deviceUUID).subscribe(data => this.deviceActivationInfo = data,
       err => this.deviceActivationInfo = err.error.message);
  }
}
