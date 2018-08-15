import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtudeModel } from './models/etude.model';
import { DialogComponent } from './components/modales/dialog/dialog.component';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,
     MatCardModule, MatToolbarModule, DateAdapter, MatNativeDateModule, MatGridTile, MatGridListModule } from '@angular/material';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { ModalAjoutArcticleComponent } from './components/modales/modal-ajout-arcticle/modal-ajout-arcticle.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatGridListModule

  ],
  declarations: [DialogComponent,  ModalAjoutArcticleComponent, SnackBarComponent, ModalAjoutArcticleComponent],
  entryComponents: [DialogComponent, ModalAjoutArcticleComponent, SnackBarComponent]
})
export class SharedModule { }
