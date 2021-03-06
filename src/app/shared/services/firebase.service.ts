import { EtudeModel } from './../models/etude.model';
import { Observable } from 'rxjs/Observable';
import { PhotoModel } from './../models/photo.model';
import {
    FirebaseListObservable,
    AngularFireDatabase
} from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FirebaseService {
    photoListe: FirebaseListObservable<PhotoModel[]>;
    etudesListe: FirebaseListObservable<EtudeModel[]>;
    constructor(private http: HttpClient, private db: AngularFireDatabase) {}

    getArticles(): Observable<any> {
        this.photoListe = this.db.list('photosBlog');
        this.photoListe.forEach(element => {
            element.forEach(res => {
                this.creerUrlImage(res);
            });
        });

        return this.photoListe;
    }

    getEtudes(): Observable<any> {
        this.etudesListe = this.db.list('/etudes');

        return this.etudesListe;
    }

    creerUrlImage(item: PhotoModel): any {
        const image = new Image();
        image.src = item.photo;
        item.photo = image.src;
    }

    enregistrerArticle(id: number, photo: PhotoModel) {
        this.db.database.ref('photosBlog/photo' + id).set(photo);
    }
}
