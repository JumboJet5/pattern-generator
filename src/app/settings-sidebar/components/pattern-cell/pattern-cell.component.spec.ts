import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternCellComponent } from './pattern-cell.component';

describe('PatternCellComponent', () => {
  let component: PatternCellComponent;
  let fixture: ComponentFixture<PatternCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
