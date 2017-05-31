import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVechicleComponent } from './add-vechicle.component';

describe('AddVechicleComponent', () => {
  let component: AddVechicleComponent;
  let fixture: ComponentFixture<AddVechicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVechicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
