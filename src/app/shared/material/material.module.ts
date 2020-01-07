import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatCardModule,
  MatTabsModule,
  MatSnackBarModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatListModule,
} from '@angular/material';

const materialModules = [
  MatTooltipModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule,
  MatTabsModule,
  MatIconModule,
  MatButtonToggleModule,
  MatListModule,
];

@NgModule({
  exports: materialModules,
  imports: materialModules
})
export class MaterialModule { }
