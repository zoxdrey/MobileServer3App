import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userName = 'User';

  constructor() {
    console.log(localStorage.getItem('user_name'));
    this.userName = localStorage.getItem('user_name');
  }

  ngOnInit() {

  }

}
