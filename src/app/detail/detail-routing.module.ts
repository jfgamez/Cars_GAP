import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {
    path: 'vehicle/:id',
    component: VehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DetailRoutingModule { }
