import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideBannerComponent } from './left-side-banner.component';

describe('LeftSideBannerComponent', () => {
  let component: LeftSideBannerComponent;
  let fixture: ComponentFixture<LeftSideBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
