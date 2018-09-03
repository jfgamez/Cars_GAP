import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatImportsModule } from '../shared/mat-imports.module';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { FormsModule } from '@angular/forms';
import { DataService } from '../core/data.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    MatImportsModule,
    FormsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    DataService
  ],
  declarations: [
    HomeComponent,
    DetailCardComponent
  ]
})
export class HomeModule { }
