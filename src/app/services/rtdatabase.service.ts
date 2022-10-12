import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class RtdatabaseService {
  constructor(private db: AngularFireDatabase) {}

  getAboutText() {
    return this.db.database.ref('/aboutText').get();
  }
}
