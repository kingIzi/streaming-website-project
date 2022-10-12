import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private auth: RegistrationService) {}

  onLoginClicked() {
    if (this.email === '') {
      alert('Please enter email');
      return;
    } else if (this.password === '') {
      alert('Please provide a password');
      return;
    }
    this.auth.loginUser(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {}
}
