import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navObj = {
    logo: 'Boyebi',
    signUpBtn: "Bo S'aboner",
    navItem: 'A Propos na biso',
  };
  constructor() {}

  ngOnInit(): void {}
}
