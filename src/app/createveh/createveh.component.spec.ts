import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatevehComponent } from './createveh.component';

describe('CreatevehComponent', () => {
  let component: CreatevehComponent;
  let fixture: ComponentFixture<CreatevehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatevehComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatevehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
