import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehDetailsComponent } from './veh-details.component';

describe('VehDetailsComponent', () => {
  let component: VehDetailsComponent;
  let fixture: ComponentFixture<VehDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
