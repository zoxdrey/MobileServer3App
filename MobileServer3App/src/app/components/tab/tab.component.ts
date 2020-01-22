import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  placeholder = 'Enter some';
  constructor() { }

  ngOnInit() {
  }

  refreshDataTable() {

  }
}
