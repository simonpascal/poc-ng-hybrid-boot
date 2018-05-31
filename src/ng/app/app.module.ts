import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {RouterModule, Routes} from '@angular/router';

import { AppBoostrapModule } from './app-bootstrap/app-boostrap.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';


const appRoutes: Routes= [
  {path: 'utilisateurs', component: UtilisateursComponent,
  data: {title: 'liste des developpeurs'}},
  {path: 'index', component: HomePageComponent},
  {path: 'utilisateur/:id', component: UtilisateurComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [    
    AppComponent,
    NavbarComponent,
    UtilisateursComponent,
    UtilisateurComponent,
    PageNotFoundComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule,
    RouterModule.forRoot(appRoutes,
      {enableTracing: true})
  ],
  exports: [
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
