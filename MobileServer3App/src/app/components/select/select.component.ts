import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../services/project/project.service';
import {Observable} from 'rxjs';

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
  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjectsList().subscribe(projects => this.projects = projects);
  }

  getData(selected: string) {
    this.apklist = this.projectService.getUpdate(selected);
    this.settingslist = this.projectService.getSettings(selected);
  }
}
