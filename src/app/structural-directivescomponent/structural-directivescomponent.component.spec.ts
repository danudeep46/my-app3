import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivescomponentComponent } from './structural-directivescomponent.component';

describe('StructuralDirectivescomponentComponent', () => {
  let component: StructuralDirectivescomponentComponent;
  let fixture: ComponentFixture<StructuralDirectivescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectivescomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
