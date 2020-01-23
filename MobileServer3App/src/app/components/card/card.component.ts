import {Component, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Output() inputType = 'password';
  @Output() loginPlaceholder = 'Имя пользователя';
  @Output() passwordPlaceholder = 'Пароль';
  login: string;
  password: string;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  cardLogin() {
    this.authService.login(this.login, this.password);
    console.log(this.login, this.password);
  }
}
