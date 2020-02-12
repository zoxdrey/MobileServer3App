import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() loginButtonClicked = new EventEmitter();
  @Input() isDisabled;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    console.log(this.isDisabled);
  }

  login() {
    this.loginButtonClicked.emit();
  }
}
