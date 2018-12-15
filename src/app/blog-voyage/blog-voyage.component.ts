import { AffichageFooterService } from './../shared/services/affichage-footer.service';
import { Observable } from 'rxjs/Observable';
import { AuthentificationServiceService } from './../shared/services/authentification-service.service';
import { FirebaseService } from './../shared/services/firebase.service';
import { MatDialog } from '@angular/material';
import { PhotoModel } from './../shared/models/photo.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalAjoutArcticleComponent } from '../shared/components/modales/modal-ajout-arcticle/modal-ajout-arcticle.component';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/services/article.service';


@Component({
    selector: 'app-blog-voyage',
    templateUrl: './blog-voyage.component.html',
    styleUrls: ['./blog-voyage.component.css']
})
export class BlogVoyageComponent implements OnInit {

    @Output() affichageFooter = new EventEmitter<any>();
    selectedFile: File = null;
    url: any;
    imageToShow: any;
    sanitizedUrl: any;
    image64: any;
    numeroImage = 0;
    chargement = true;

    blue = '#87CEFA';
    red = '#FF0000';
    photoListe: PhotoModel[];
    authentifie = false;

    constructor(
        public dialog: MatDialog,
        private router: Router,
        private articleService: ArticleService,
        private fireBaseService: FirebaseService,
        private auth: AuthentificationServiceService,
        private affichageFooterService: AffichageFooterService
    ) {
        this.auth.authentifie.subscribe(res => {
            this.authentifie = res;
        });
    }

    ngOnInit() {
        this.affichageFooterService.updateData(false);
        this.affichageFooter.observers.push();
        this.fireBaseService.getArticles().subscribe(
            res => {
                this.photoListe = res;
                this.photoListe.forEach(element => {
                    if (element.id >= this.numeroImage) {
                        this.numeroImage = element.id + 1;
                    }
                });
                this.chargement = false;
                this.affichageFooterService.updateData(true);
            },
            error => {},
            () => {
                this.chargement = false;
            }
        );
    }

    ajouterArticle() {
        const dialogRef = this.dialog.open(ModalAjoutArcticleComponent, {
            width: '70%',
            height: '70%',
            data: { idImage: this.numeroImage }
        });

        dialogRef.afterClosed().subscribe(result => {});
    }

    goToDetailArticle(item: PhotoModel) {
        this.articleService.updateData(item);
        this.router.navigate(['/details-article']);
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
    }
}
