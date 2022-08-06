import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bust } from '@fantasy-football-busts/api-interfaces';

@Component({
  selector: 'fantasy-football-busts-bust-details',
  templateUrl: './bust-details.component.html',
  styleUrls: ['./bust-details.component.scss'],
})
export class BustDetailsComponent {
  currentBust: Bust;
  originalName = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set bust(value) {
    if (!value) return;
    this.currentBust = { ...value };
    this.originalName = this.currentBust.name;
  }
}
