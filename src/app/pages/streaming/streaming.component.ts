import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Video } from 'src/app/model/video';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-streaming',
  templateUrl: './streaming.component.html',
  styleUrls: ['./streaming.component.scss'],
})
export class StreamingComponent implements OnInit {
  id: string = '';
  video: any = {};
  constructor(private route: ActivatedRoute, private data: StoreService) {
    this.id = this.route.snapshot.params['videoId'];
  }

  ngOnInit(): void {
    this.data.getVideoById(this.id).subscribe((res) => {
      const json = JSON.stringify(res.payload.data());
      const data = JSON.parse(json);
      this.video = data;
    });
  }
}
