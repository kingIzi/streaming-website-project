import { Component, OnInit } from '@angular/core';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent implements OnInit {
  icons = {
    faHardHat: faHardHat,
  };
  constructor() {}

  ngOnInit(): void {}
}
