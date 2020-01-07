import { NgModule } from '@angular/core';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { firebaseConfig } from 'src/environments/commons/firebase';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
  ],
})
export class FirebaseModule { }
