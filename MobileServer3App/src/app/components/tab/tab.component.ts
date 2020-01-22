import {Component, OnInit, ViewChild} from '@angular/core';
import {Device} from '../../model/device';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  placeholder = 'Enter some';
  data: Device;

  constructor() {
  }

  ngOnInit() {
  }

  refreshDataTable() {

  }

  show(data: Device) {
      this.data = data;
  }
}
