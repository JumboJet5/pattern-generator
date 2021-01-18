import { Component } from '@angular/core';
import { PatternConfigService } from '../../services/pattern-config/pattern-config.service';

@Component({
  selector: 'pg-pattern-cell',
  templateUrl: './pattern-cell.component.html',
  styleUrls: [ './pattern-cell.component.scss' ],
})
export class PatternCellComponent {
  get rows(): number[] {
    return PatternCellComponent._generateArray(this.patternConfigService.sideB);
  }

  get columns(): number[] {
    return PatternCellComponent._generateArray(this.patternConfigService.sideA);
  }

  constructor(public patternConfigService: PatternConfigService) { }

  private static _generateArray(length: number): number[] {
    return new Array(length).fill(0)
                            .map((_, i) => i);
  }
}
