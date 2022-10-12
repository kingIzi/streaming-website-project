import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { Video } from 'src/app/model/video';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-videos-list-view',
  templateUrl: './videos-list-view.component.html',
  styleUrls: ['./videos-list-view.component.scss'],
})
export class VideosListViewComponent implements OnInit {
  videosListData: Video[] = [];
  id: string = '';
  descriptionVisible: any;
  icons = {
    faStar: faStar,
    faPlayCircle: faPlayCircle,
  };
  constructor(private route: ActivatedRoute, private data: StoreService) {
    this.id = this.route.snapshot.params['videoId'];
  }
  ngOnInit(): void {
    this.getAvailableVideos();
  }

  getVideoRatings(video: Video) {
    const N = video.rating;
    return [...Array(N).keys()].map((x) => ++x);
  }

  getAvailableVideos() {
    this.data.getAvailableVideos().subscribe((res) => {
      this.videosListData = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
      let foundIndex = this.videosListData.findIndex((e) => e.id === this.id);
      if (foundIndex !== -1) {
        this.videosListData.splice(foundIndex, 1);
      }
    });
  }

  showDescription(videoId: string) {
    if (videoId) {
      this.descriptionVisible = videoId;
    }
  }

  hideDescription() {
    this.descriptionVisible = '';
  }
}
