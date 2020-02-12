import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ApiService} from '../../services/api.service';
import {Device} from '../../model/device';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.css']
})
export class DeviceTableComponent implements OnInit {
  selectedRow: any;
  displayedColumns: string[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<Device[]>;
  @Output() detailedData =  new EventEmitter();
  isLoadingResults: boolean;

  constructor(private httpService: ApiService ) {
    this.displayedColumns = ['name', 'id', 'imei'];
    this.isLoadingResults = false;
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
    this.isLoadingResults = true;
    this.httpService.getDevices().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.devices);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
      },
      error => {
        this.isLoadingResults = false;
      });
  }

  showDetail(row: any) {
    this.selectedRow = row;
    console.log(this.selectedRow);
    this.detailedData.emit(row);
  }
}
