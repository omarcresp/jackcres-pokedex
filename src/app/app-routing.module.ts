import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
// import { map } from 'rxjs/operators';

// const redirectUnauthorizedToLogin = () => map(user => !user ? ['auth'] : true);
// const redirectLoggedInToHome = () => map(user => !!user ? ['home'] : true);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    // canActivate: [AngularFireAuthGuard],
    // data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
