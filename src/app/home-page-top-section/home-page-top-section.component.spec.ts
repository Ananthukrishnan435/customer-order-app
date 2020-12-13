import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageTopSectionComponent } from './home-page-top-section.component';

describe('HomePageTopSectionComponent', () => {
  let component: HomePageTopSectionComponent;
  let fixture: ComponentFixture<HomePageTopSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageTopSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageTopSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
