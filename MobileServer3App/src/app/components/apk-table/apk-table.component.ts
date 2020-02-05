import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-apk-table',
  templateUrl: './apk-table.component.html',
  styleUrls: ['./apk-table.component.css']
})
export class ApkTableComponent implements OnInit {
  @Input() tableData: any;
  private displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['project', 'version', 'size', 'date'];
  }

  ngOnInit() {
    console.log(this.tableData);
  }

}
