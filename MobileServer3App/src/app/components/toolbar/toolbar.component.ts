import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  userName = 'User';

  constructor(private router: Router) {
    this.userName = localStorage.getItem('user_name');
  }

  ngOnInit() {

  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
