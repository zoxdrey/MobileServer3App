import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { Observable } from 'rxjs';
import { ApkService } from 'src/app/services/apk/apk.service';
import { MatDialog, MatPaginator, MatSort,MatTableDataSource } from '@angular/material';
import { ApkFileUploadModalComponent } from '../apk-file-upload-modal/apk-file-upload-modal.component';
import { Apk } from 'src/app/model/apk';

@Component({
  selector: 'app-apk-table',
  templateUrl: './apk-table.component.html',
  styleUrls: ['./apk-table.component.css']
})
export class ApkTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input() projectName: string;
  dataSource: MatTableDataSource<Apk>;
  displayedColumns: string[];


  constructor(private apkService: ApkService,public dialog: MatDialog) {
    this.displayedColumns = ['project', 'version', 'size', 'date'];
  }

  ngOnInit() {
    this.apkService.getUpdate(this.projectName).subscribe((tableData) => {
    this.dataSource = new MatTableDataSource(tableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;})
  }

  showDetail(row){
    console.log(row);
  }

  uploadApkFile(){
    const dialogRef = this.dialog.open(ApkFileUploadModalComponent, {
      width: '250px',
      data: {projectName: this.projectName}
    });
    //this.apkSerice.uploadApkFile(this.projectName).subscribe(() => this.tableData = this.apkSerice.getUpdate(this.projectName));
  }

  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
