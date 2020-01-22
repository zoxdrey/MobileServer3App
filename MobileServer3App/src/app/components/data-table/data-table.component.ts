import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../services/api.service';
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
  // devices: Observable<Device[]>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  device: Device[] = [{}];
  dataSource: MatTableDataSource<Device[]>;
  @Output() detailedData =  new EventEmitter();

  constructor(private httpService: ApiService ) {
    this.displayedColumns = ['uuid', 'name', 'id', 'imei'];
  }

  ngOnInit() {
    this.loadDevices();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadDevices() {
    this.httpService.getDevices().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.devices);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });
  }

  showDetail(row: any) {
    this.detailedData.emit(row);
  }
}
