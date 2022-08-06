import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BustsListComponent } from './busts-list.component';

describe('BustsListComponent', () => {
  let component: BustsListComponent;
  let fixture: ComponentFixture<BustsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BustsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BustsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
