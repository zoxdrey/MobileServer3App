import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DialogData } from 'src/app/shared/dialog-data';
import { ApkService } from 'src/app/services/apk/apk.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { SnackBarComponent } from '../snack-bar/snack-bar.component';


@Component({
  selector: 'app-apk-file-upload-modal',
  templateUrl: './apk-file-upload-modal.component.html',
  styleUrls: ['./apk-file-upload-modal.component.css']
})
export class ApkFileUploadModalComponent implements OnInit {
  fileUploadProgress: string;
  fileVersion:string;
  fileData: File = null;
  fileName: string;
  constructor( public dialogRef: MatDialogRef<ApkFileUploadModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apkService: ApkService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  onNoClick(){
      this.dialogRef.close();
  }

  onLoad(){
    let reader = new FileReader();
    let file = this.fileData;
      reader.readAsDataURL(file);
      reader.onload = () => {
        let uploadFile = reader.result.toString().split(',')[1];
        this.apkService.uploadApkFile(this.data.projectName, uploadFile, this.fileVersion).subscribe(()=>{
          this._snackBar.openFromComponent(SnackBarComponent,{
            duration: 4,
          });
          this.dialogRef.close();});
      };
   // 
  }

  fileChoose(fileInput: any){
    this.fileData = <File>fileInput.target.files[0];
    console.log(this.fileData);
    this.fileName = this.fileData.name;
  }
}
