import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleComponent } from './vehicle/vehicle.component';
import { ComparativeComponent } from './comparative/comparative.component';
 
const routes: Routes = [
  {
    path: 'vehicle/:id',
    component: VehicleComponent
  },
  {
    path: 'comparative',
    component: ComparativeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DetailRoutingModule { }
