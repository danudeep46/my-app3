import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnudeepComponent } from './anudeep.component';

describe('AnudeepComponent', () => {
  let component: AnudeepComponent;
  let fixture: ComponentFixture<AnudeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnudeepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnudeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
