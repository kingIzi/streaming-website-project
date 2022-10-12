import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private afs: AngularFirestore) {}

  //get all available videos
  getAvailableVideos() {
    return this.afs.collection('/videos').snapshotChanges();
  }

  //find single document
  getVideoById(docId: string) {
    return this.afs.collection('/videos').doc(docId).snapshotChanges();
  }
}
