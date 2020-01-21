import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpService} from '../../services/http.service';
import {Device} from '../../model/device';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource = new MatTableDataSource();
  devices: Observable<Device[]>;
  private testkeyupvalue: string;
  constructor(private httpService: HttpService ) {
    this.displayedColumns = ['uuid', 'name', 'id', 'imei'];
  }

  ngOnInit() {
    this.httpService.getDevices().subscribe(data => this.devices = data.devices);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
