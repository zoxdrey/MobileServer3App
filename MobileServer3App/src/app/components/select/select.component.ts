import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project/project.service';
import {Observable} from 'rxjs';
import {ApkService} from '../../services/apk/apk.service';
import {SettingsService} from '../../services/settings/settings.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  projects: string[];
  selected: '';
  apklist: Observable<any>;
  settingslist: Observable<any>;
  constructor(private projectService: ProjectService, private apkService: ApkService, private settingsService: SettingsService) { }

  ngOnInit() {
    this.projectService.getProjectsList().subscribe(projects => this.projects = projects);
  }

  getData(selected: string) {
    this.apklist = this.apkService.getUpdate(selected);
    this.settingslist = this.settingsService.getSettings(selected);
    console.log(this.apklist);
  }
}
