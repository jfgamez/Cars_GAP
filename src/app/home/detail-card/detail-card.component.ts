import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  @Input() photo: string;
  @Input() model: string;
  @Input() year: string;
  @Input() brand: string;
  @Input() cost: string;

  constructor() { }

}