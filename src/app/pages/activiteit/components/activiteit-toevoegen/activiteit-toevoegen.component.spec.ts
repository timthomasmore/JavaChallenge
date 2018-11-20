import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteitToevoegenComponent } from './activiteit-toevoegen.component';

describe('ActiviteitToevoegenComponent', () => {
  let component: ActiviteitToevoegenComponent;
  let fixture: ComponentFixture<ActiviteitToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiviteitToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteitToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
