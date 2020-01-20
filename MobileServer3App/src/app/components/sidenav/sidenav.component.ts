import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  mode = 'side';
  isOpen = true;
  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);
  constructor() { }

  ngOnInit() {
  }

}
