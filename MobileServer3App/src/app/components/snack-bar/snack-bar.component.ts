import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {
  message: string;
  constructor() {
   
   }

  ngOnInit() {
    this.message = 'Успешно отправлено';
  }

}
