import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { LanguageService } from './core/services/language/language.service';
import { INotification } from './core/interfaces/notification/notification';
import { NotificationsService } from './core/services/notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public isLoggedIn: boolean;
  public errorDisplayed: boolean;

  constructor(
    public snackBar: MatSnackBar,
    private languageService: LanguageService,
    private notificationService: NotificationsService,
  ) {
    this.languageService.setDefaultLang();

    this.notificationService.getNotification()
      .subscribe((d) => this.showNotification(d));
  }

  showNotification(d: INotification): void {
    if (!this.errorDisplayed && d) {
      if (d.status === 'ERROR') {
        this.errorDisplayed = true;

        const notification$ = this.snackBar.open(d.msn, 'CLOSE', {
          duration: d.time || 10000,
          panelClass: 'area-alert',
          horizontalPosition: 'right'
        });

        notification$.afterDismissed().subscribe(( ) => this.errorDisplayed = false);
      } else {
        this.snackBar.open(d.msn, 'CLOSE', {
          duration: 2000,
          panelClass: 'area-info',
          horizontalPosition: 'right'
        });
      }
    }
  }

}
