import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  navObj = {
    logo: 'Boyebi',
  };
  navItems = [
    {
      path: '/videos',
      item: 'Ba Videos',
    },
    {
      path: '/about',
      item: 'A propos na biso',
    },
  ];

  constructor(private reg: RegistrationService) {}
  ngOnInit(): void {}

  logoutUser() {
    this.reg.logoutUser();
  }
}
