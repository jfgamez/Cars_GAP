import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/data.service';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-comparative',
  templateUrl: './comparative.component.html',
  styleUrls: ['./comparative.component.scss']
})
export class ComparativeComponent implements OnInit {
  _data: any;
  _dataComparative: any;
  ArrayIdComparative: Array<any> = [];
  btnComparative: Boolean = true;
  
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this._data = this.dataService.getCars();
  }

    /**
   * Manage event on MatSlideToggle. Comparative
   * @param  {MatSlideToggleChange} event
   * @param  {id} any
   * @returns void
   */
  changeComparative(event: MatSlideToggleChange, id: any, car: any): void {

    const active = event.checked;
    const index = this.ArrayIdComparative.indexOf(id)
    if (index > -1) {
      this.ArrayIdComparative.splice(index, 1);
    }

    if (this.ArrayIdComparative.length < 3 && active) {
      this.ArrayIdComparative.push(id);
      this.btnComparative = false;
    } else if (this.ArrayIdComparative.length === 3 ) {
        car.active = false;
        alert('Solo puedes seleccionar 3 vehículos');
    } else if (this.ArrayIdComparative.length === 0){
      this.btnComparative = true;
    }
  }

  /**
   * On action comparative
   */
  toggleComparative (): void {
    alert('TODO: (john.gamez) Sección en construcción')
  }

}
