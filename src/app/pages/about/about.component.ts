import { Component, OnInit } from '@angular/core';
import { RtdatabaseService } from 'src/app/services/rtdatabase.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  title: string = '';
  paragraphs: string[] = [];
  constructor(private rtDatabase: RtdatabaseService) {}

  renderAboutText() {
    this.rtDatabase.getAboutText().then((res) => {
      let json = JSON.stringify(res.toJSON());
      let data = JSON.parse(json);
      this.title = data.title;
      let paragraphs = data.paragraphs;
      this.paragraphs = Object.keys(paragraphs).map((key) => {
        return paragraphs[key];
      });
    });
  }

  ngOnInit(): void {
    this.renderAboutText();
  }
}
