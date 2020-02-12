import {Component, OnInit, Output} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
});

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  cardLogin() {
    this.authService.login(this.loginForm.value);
  }
}
