import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPatternSettings } from '../../interfaces/pattren-settings';


@Injectable({ providedIn: 'root' })
export class PatternConfigService {
  private _patternConfig: IPatternSettings;

  public get patternConfig(): IPatternSettings {
    return this._patternConfig;
  }

  private _updates$: BehaviorSubject<IPatternSettings> = new BehaviorSubject<IPatternSettings>(null);

  public get updates$(): Observable<IPatternSettings> {
    return this._updates$.asObservable();
  }

  private _patternSet: Set<number>;

  public updateConfig(patternConfig: IPatternSettings): void {
    if (!patternConfig) return;

    const { sideA, sideB } = patternConfig;
    this._patternConfig = patternConfig;
    this._patternSet = new Set<number>();

    const patternLength = sideA * sideB;

    for (let i = 0; i < patternLength; i += 2) {
      const equalRow = Math.floor(i / sideB) % 2 === 0 ? i % sideB : sideB - i % sideB - 1;
      const equalColumn = Math.floor(i / sideA) % 2 === 0 ? i % sideA : sideA - i % sideA - 1;

      this._patternSet.add(equalRow * sideA + equalColumn);
    }

    this._updates$.next(patternConfig);
  }

  public isCellCPaintedOver(x: number, y: number): boolean {
    const { sideA, sideB } = this.patternConfig || {};
    return this._patternSet.has((x % sideB) * sideA + (y % sideA));
  }
}
