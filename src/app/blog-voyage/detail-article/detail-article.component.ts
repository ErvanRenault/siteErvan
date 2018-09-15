import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { PhotoModel } from './../../shared/models/photo.model';
import { ArticleService } from './../../shared/services/article.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-detail-article',
    templateUrl: './detail-article.component.html',
    styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
    article: PhotoModel;
    constructor(
        private articleService: ArticleService,
        private db: AngularFireDatabase,
        private router: Router
    ) {}

    ngOnInit() {
        this.articleService.articleObservable.subscribe(article => {
            this.article = article;
            this.article.date = article.date;
        });
    }

    supprimerArticle(id: any) {
        this.db.database.ref('photosBlog/photo' + id).remove();
        this.retour();
    }

    retour() {
        this.router.navigate(['blog-voyage']);
    }
}
