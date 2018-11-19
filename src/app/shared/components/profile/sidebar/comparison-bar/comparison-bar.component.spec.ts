import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonBarComponent } from './comparison-bar.component';

describe('ComparisonBarComponent', () => {
  let component: ComparisonBarComponent;
  let fixture: ComponentFixture<ComparisonBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
