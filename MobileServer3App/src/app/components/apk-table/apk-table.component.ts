import {Component, Input, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-apk-table',
  templateUrl: './apk-table.component.html',
  styleUrls: ['./apk-table.component.css']
})
export class ApkTableComponent implements OnInit {
  @Input() tableData: Observable<any>;
  displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['project', 'version', 'size', 'date'];
  }

  ngOnInit() {
  }

  showDetail(row){
    console.log(row);
  }

  
}
