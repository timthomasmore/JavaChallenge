import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowrewardsComponent } from './allowrewards.component';

describe('AllowrewardsComponent', () => {
  let component: AllowrewardsComponent;
  let fixture: ComponentFixture<AllowrewardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllowrewardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllowrewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
