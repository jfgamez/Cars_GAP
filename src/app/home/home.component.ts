import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../core/menu.constants';
import { DataService } from '../core/data.service';

@Component({
  selector: 'et-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userMenu: any = {};
  menuItems: any = MENU_ITEMS;
  data: any;
  brandFilter: String = '';

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getCars();
  }
}
