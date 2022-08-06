import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bust } from '@fantasy-football-busts/api-interfaces';

@Component({
  selector: 'fantasy-football-busts-busts-list',
  templateUrl: './busts-list.component.html',
  styleUrls: ['./busts-list.component.scss'],
})
export class BustsListComponent {
  @Input() busts: Bust[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
