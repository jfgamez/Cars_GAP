import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { VehicleComponent } from './vehicle/vehicle.component';
import { SharedModule } from '../shared/shared.module';
import { DataService } from '../core/data.service';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ],
  providers: [
    DataService
  ],
  declarations: [VehicleComponent]
})
export class DetailModule { }
