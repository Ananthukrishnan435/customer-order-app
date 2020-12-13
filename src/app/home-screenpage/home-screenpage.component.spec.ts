import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScreenpageComponent } from './home-screenpage.component';

describe('HomeScreenpageComponent', () => {
  let component: HomeScreenpageComponent;
  let fixture: ComponentFixture<HomeScreenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeScreenpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeScreenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
