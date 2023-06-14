import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app.routing';
import { AccueilModule } from './contenu/accueil/accueil.module';
import { RecettesModule } from './contenu/recettes/recettes.module';
import { FrigoModule } from './contenu/frigo/frigo.module';
import { FavorisModule } from './contenu/favoris/favoris.module';
import { MenuModule } from './contenu/menu/menu.module';
import { AproposModule } from './contenu/apropos/apropos.module';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AccueilModule,
    RecettesModule,
    FrigoModule,
    FavorisModule,
    MenuModule,
    AproposModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
