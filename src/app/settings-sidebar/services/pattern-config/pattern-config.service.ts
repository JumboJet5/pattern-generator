import { Injectable } from '@angular/core';
import { IPatternSettings } from '../../interfaces/pattren-settings';


@Injectable({
  providedIn: 'root',
})
export class PatternConfigService {
  private _sideA: number;

  public get sideA(): number {
    return this._sideA;
  }

  private _sideB: number;

  public get sideB(): number {
    return this._sideB;
  }

  private _patternSet: Set<number>;

  public updateConfig({ sideA, sideB }: IPatternSettings): void {
    this._sideA = sideA;
    this._sideB = sideB;
    this._patternSet = new Set<number>();

    const patternLength = sideA * sideB;

    for (let i = 0; i < patternLength; i += 2) {
      const equalRow = Math.floor(i / sideB) % 2 === 0 ? i % sideB : sideB - i % sideB - 1;
      const equalColumn = Math.floor(i / sideA) % 2 === 0 ? i % sideA : sideA - i % sideA - 1;

      this._patternSet.add(equalRow * sideA + equalColumn);
    }
  }

  public isCellCPaintedOver(x: number, y: number): boolean {
    return this._patternSet.has(x * this._sideA + y);
  }
}
