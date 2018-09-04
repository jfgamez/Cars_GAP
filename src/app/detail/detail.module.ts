import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../core/data.service';
import { ComparativeComponent } from './comparative/comparative.component';
import { MatImportsModule } from '../shared/mat-imports.module';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule,
    MatImportsModule
  ],
  providers: [
    DataService
  ],
  declarations: [VehicleComponent, ComparativeComponent]
})
export class DetailModule { }
