import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHiringProfileComponent } from './create-hiring-profile.component';

describe('CreateHiringProfileComponent', () => {
  let component: CreateHiringProfileComponent;
  let fixture: ComponentFixture<CreateHiringProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHiringProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHiringProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
