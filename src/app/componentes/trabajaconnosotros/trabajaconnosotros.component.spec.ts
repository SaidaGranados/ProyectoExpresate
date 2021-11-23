import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajaconnosotrosComponent } from './trabajaconnosotros.component';

describe('TrabajaconnosotrosComponent', () => {
  let component: TrabajaconnosotrosComponent;
  let fixture: ComponentFixture<TrabajaconnosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajaconnosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajaconnosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
