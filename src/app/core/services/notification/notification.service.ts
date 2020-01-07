import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

import { LanguageService } from '../language/language.service';
import { INotification } from '../../interfaces/notification/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  notification$: BehaviorSubject<INotification>;

  constructor(
    public languageService: LanguageService
  ) {
    this.notification$ = new BehaviorSubject<INotification>(null);
  }

  setTranslateNotification(notification: INotification): void {
    this.languageService.getTranslationOf(notification.msn)
      .subscribe((d) => this.notification$.next({status: notification.status, msn: d}));
  }

  setTranslateNotificationWithValue(notification: INotification): void {
    this.languageService.getTranslationOfWithValue(notification.msn, notification.value)
      .subscribe((d) => this.notification$.next({status: notification.status, msn: d}));
  }

  setNotification(notification: INotification): void {
    this.notification$.next(notification);
  }

  getNotification(): Observable<INotification> {
    return this.notification$.asObservable();
  }
}
