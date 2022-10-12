import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  email: string = '';
  constructor(private auth: RegistrationService) {}

  ngOnInit(): void {}

  onForgotPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }
}
