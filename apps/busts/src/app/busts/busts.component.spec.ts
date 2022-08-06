import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BustsComponent } from './busts.component';

describe('BustsComponent', () => {
  let component: BustsComponent;
  let fixture: ComponentFixture<BustsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BustsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BustsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
