import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternCanvasComponent } from './pattern-canvas.component';

describe('PatternCanvasComponent', () => {
  let component: PatternCanvasComponent;
  let fixture: ComponentFixture<PatternCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternCanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
