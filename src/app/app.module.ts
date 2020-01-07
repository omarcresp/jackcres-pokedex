import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { translateConfig } from './utils/translate';
import { LanguageService } from './core/services/language/language.service';
import { StorageService } from './core/services/storage/storage.service';
import { SharedModule } from './shared/shared.module';
import { FirebaseModule } from './shared/firebase/firebase.module';
import { PokedexService } from './core/services/pokedex/pokedex.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    TranslateModule.forRoot(translateConfig),
    FirebaseModule,
  ],
  providers: [
    LanguageService,
    StorageService,
    PokedexService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
