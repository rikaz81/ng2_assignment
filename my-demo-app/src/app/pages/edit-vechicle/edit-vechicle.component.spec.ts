import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVechicleComponent } from './edit-vechicle.component';

describe('EditVechicleComponent', () => {
  let component: EditVechicleComponent;
  let fixture: ComponentFixture<EditVechicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVechicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
