import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { SettingsService } from 'src/app/services/settings/settings.service';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Settings } from 'src/app/model/settings';

@Component({
  selector: 'app-settings-table',
  templateUrl: './settings-table.component.html',
  styleUrls: ['./settings-table.component.css']
})
export class SettingsTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() projectName: string;
  displayedColumns: string[];
  dataSource: MatTableDataSource<Settings>;

  constructor(private settingsService: SettingsService) {
    this.displayedColumns = ['project', 'version', 'size', 'date', " "];
  }

  ngOnInit() {
      this.loadSettingsList();
  }

  showDetail(row){
    console.log(row);
  }

  uploadSettingsFile(){
    this.settingsService.uploadSettingsFile(this.projectName).subscribe();
  }

  loadSettingsList(){
    this.settingsService.getSettings(this.projectName).subscribe((tableData) => {
      this.dataSource = new MatTableDataSource(tableData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;})
  }
}
