import { Component, OnInit } from '@angular/core';
import { emptyBust, Bust } from '@fantasy-football-busts/api-interfaces';
import { BustsService } from '@fantasy-football-busts/core-data';
import { tap } from 'rxjs';

@Component({
  selector: 'fantasy-football-busts-busts',
  templateUrl: './busts.component.html',
  styleUrls: ['./busts.component.scss'],
})
export class BustsComponent implements OnInit {
  busts = [];
  busts$: any;
  selectedBust = emptyBust;
  originalName = '';

  constructor(private bustsService: BustsService) {}

  ngOnInit(): void {
    this.fetchBusts();
  }

  selectBust(bust: Bust) {
    this.selectedBust = bust;
  }

  fetchBusts() {
    this.busts$ = this.bustsService.all();
  }

  saveBust(bust: Bust) {
    if (bust.id) {
      this.updateBust(bust);
    } else {
      this.createBust(bust);
    }
  }

  createBust(bust: Bust) {
    this.bustsService.create(bust).subscribe((result) => this.fetchBusts());
  }

  updateBust(bust: Bust) {
    this.bustsService.update(bust).subscribe((result) => this.fetchBusts());
  }

  deleteBust(id: number) {
    this.bustsService
      .delete(id)
      .pipe(tap(() => this.fetchBusts()))
      .subscribe();
  }

  reset() {
    this.selectBust({ ...emptyBust });
  }
}
