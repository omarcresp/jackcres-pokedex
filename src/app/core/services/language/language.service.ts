import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private translateService: TranslateService,
    private storageService: StorageService
  ) {
    this.setDefaultLang();
  }

  getLang(): string {
    return this.storageService.get('lang');
  }

  setLang(lang: string): void {
    this.translateService.use(lang);
    this.storageService.set('lang', lang);
  }

  setDefaultLang(): void {
    const lang = this.storageService.get('lang') || navigator.language.split('-')[0];

    this.storageService.set('lang', lang);
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }

  getTranslationOf(keys: string | string[]): Observable<string> {
    return this.translateService.get(keys);
  }

  getTranslationOfWithValue(keys: string | string[], value?: string): Observable<string> {
    return this.translateService.get(keys, { value });
  }

}
