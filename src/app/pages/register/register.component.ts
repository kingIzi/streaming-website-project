import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private auth: RegistrationService) {}

  //constructor() {}

  ngOnInit(): void {}

  onRegisterClicked() {
    if (this.email === '') {
      alert('Please enter email');
      return;
    } else if (this.password === '') {
      alert('Please provide a password');
      return;
    }
    this.auth.registerUser(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
