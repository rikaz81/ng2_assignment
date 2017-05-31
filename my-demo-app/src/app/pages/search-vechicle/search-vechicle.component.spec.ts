import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchVechicleComponent } from './search-vechicle.component';

describe('SearchVechicleComponent', () => {
  let component: SearchVechicleComponent;
  let fixture: ComponentFixture<SearchVechicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchVechicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchVechicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
