import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AuthentificationServiceService } from './shared/services/authentification-service.service';
import { FirebaseService } from './shared/services/firebase.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { SharedModule } from './shared/shared.module';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ParallaxModule } from 'ngx-parallax';
import { CountdownModule } from 'ngx-countdown';

import {
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatGridListModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './intro/intro.component';
import { EducationComponent } from './education/education.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ButtonLogoComponent } from './shared/components/buttons/button-logo/button-logo.component';
import { ButtonMenuComponent } from './shared/components/buttons/button-menu/button-menu.component';
import { environment } from './../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { MatTabsModule } from '@angular/material/tabs';
import { CvComponent } from './cv/cv.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { DetailArticleComponent } from './blog-voyage/detail-article/detail-article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleService } from './shared/services/article.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        BannerComponent,
        EducationComponent,
        MenuComponent,
        ButtonLogoComponent,
        ButtonMenuComponent,
        CvComponent,
        ExperienceComponent,
        DetailArticleComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        ParallaxModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        AppRoutingModule,
        MatTabsModule,
        SharedModule,
        MatDialogModule,
        ScrollDispatchModule,
        MatSnackBarModule,
        MatGridListModule,
        HttpClientModule,
        CountdownModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AngularFireModule.initializeApp(environment.firebase, 'siteervan'),
        AngularFirestoreModule, // imports firebase/firestore, only needed for database features
        AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
        AngularFireStorageModule // imports firebase/storage only needed for storage features
    ],
    providers: [
        AngularFireDatabase,
        ArticleService,
        FirebaseService,
        AuthentificationServiceService
    ],
    exports: [MatGridListModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
