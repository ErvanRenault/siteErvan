import { ExperienceModel } from './../../shared/models/experience.model';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../shared/components/modales/dialog/dialog.component';
import { DonneesModalExperienceModel } from '../../shared/models/donnees-modal-experience.model';
import { SnackBarComponent } from '../../shared/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    experiences: FirebaseListObservable<ExperienceModel[]>;
    experiencesListe: ExperienceModel[];

  constructor(public dialog: MatDialog, private db: AngularFireDatabase) {
      this.db.list('experiences').subscribe(k => {
          this.experiencesListe = k;
      });
   }

  ngOnInit() {
  }

  clickImage(id: number, image: string) {
   let item: ExperienceModel;
   this.experiencesListe.forEach(element => {
       if (element.id === id) {
            item = element;
       }
   });
    const data: DonneesModalExperienceModel = {
        duree: item.duree,
        fonction: item.fonction,
        anneeDebut: item.date,
        anneeFin: null,
        contenu: item.description,
        titre: item.societe,
        typeDuree: item.typeDuree
    }

    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {item: item, image: image},
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}


