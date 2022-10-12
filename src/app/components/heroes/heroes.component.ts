import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroesObj = {
    signInBtn: 'Connexion',
    welcomeText:
      'Boyeyi Bolamu na site na biso. Awa, bokoki kokutana na ba elombe ya Bayindo banso.',
    detailedText:
      "Yekola bomoyi ya Kimpa Vita, Mvuluzi Kimbangu, Patrice lumumba na b'elombe mosusu ya mboka na biso.",
    images: [
      'https://th.bing.com/th/id/R.578331243b190c0eb8a8e9b8c9202598?rik=KEjWbBCpg3XOLg&pid=ImgRaw&r=0',
      'https://th.bing.com/th/id/OIP.ljKChw3ze-VYBJSw4FYfOQHaJy?pid=ImgDet&rs=1',
      'https://th.bing.com/th/id/OIP._a_lY6Sj4rPwU2tHeZdh1gAAAA?pid=ImgDet&rs=1',
      'https://th.bing.com/th/id/OIP.GroBdDWWNDJUndk_JGGwkgHaJ4?pid=ImgDet&rs=1',
    ],
  };
  myFunc() {
    alert('Working');
  }
  constructor() {}

  ngOnInit(): void {}
}
//best12@#!
