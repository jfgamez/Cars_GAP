import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  id_car: any;
  info_car: any;
  constructor(private _route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    this.id_car = this._route.snapshot.paramMap.get('id')
    this.getCarById(this.id_car);
  }
  /**
   * Get car by Id
   * @param  {} id
   * @returns void
   */
  getCarById(id): void {
    this._dataService.getCarById(id)
                  .subscribe(car => this.info_car = car);
  }
}
