import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesuccessComponent } from './profilesuccess.component';

describe('ProfilesuccessComponent', () => {
  let component: ProfilesuccessComponent;
  let fixture: ComponentFixture<ProfilesuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
