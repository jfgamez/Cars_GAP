import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import {
  // MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatNativeDateModule,
  MatPaginatorModule,
  // MatGridListModule,
  MatTooltipModule,
  MatDialogModule,
  MatMenuModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatPaginatorIntl,
  DateAdapter,
  MAT_DATE_FORMATS,
  // MatRadioModule,
  // MatStepperModule,
  MatTabsModule,
  MatListModule,
  MAT_DATE_LOCALE,
  MatCheckbox,
  MatCheckboxModule
} from '@angular/material';

@NgModule({
  exports: [
    // MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatNativeDateModule,
    CdkTableModule,
    MatPaginatorModule,
    // MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatChipsModule,
    // MatRadioModule,
    OverlayModule,
    PortalModule,
    // MatStepperModule,
    MatTabsModule,
    MatListModule,
    MatCheckboxModule
  ]
})
export class MatImportsModule { }
