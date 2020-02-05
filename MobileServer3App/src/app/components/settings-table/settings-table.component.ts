import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-settings-table',
  templateUrl: './settings-table.component.html',
  styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
  @Input() tableData: any;
  displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['project', 'version', 'size', 'date'];
  }

  ngOnInit() {
  }

}
