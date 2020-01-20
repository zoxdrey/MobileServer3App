import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() loginButtonClicked = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.loginButtonClicked.emit();
  }
}
