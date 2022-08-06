import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BustDetailsComponent } from './bust-details.component';

describe('BustDetailsComponent', () => {
  let component: BustDetailsComponent;
  let fixture: ComponentFixture<BustDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BustDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BustDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
