import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PatternConfigService } from '../../services/pattern-config/pattern-config.service';

@Component({
  selector: 'pg-pattern-canvas',
  templateUrl: './pattern-canvas.component.html',
  styleUrls: [ './pattern-canvas.component.scss' ],
})
export class PatternCanvasComponent implements OnInit, OnDestroy {
  @ViewChild('patternCanvas', { static: true }) public patternCanvas: ElementRef<HTMLCanvasElement>;
  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(public patternConfigService: PatternConfigService, private _element: ElementRef) { }

  public ngOnInit(): void {
    this.patternConfigService.updates$
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe(settings => !!settings && this.updatePattern());
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }

  @HostListener('window:resize')
  public onResize(): void {
    this.patternCanvas.nativeElement.width = 0;
    this.patternCanvas.nativeElement.height = 0;
    this.updatePattern();
  }

  public updatePattern(): void {
    const blockSize = this.patternConfigService.patternConfig?.cellSize;
    const width = this._element.nativeElement.clientWidth;
    const height = this._element.nativeElement.clientHeight;

    this.patternCanvas.nativeElement.width = width;
    this.patternCanvas.nativeElement.height = height;

    const ctx = this.patternCanvas?.nativeElement.getContext('2d');

    ctx.fillStyle = this.patternConfigService.patternConfig?.color;

    for (let offsetX = 0; offsetX < width; offsetX += blockSize) {
      for (let offsetY = 0; offsetY < height; offsetY += blockSize) {
        if (this.patternConfigService.isCellCPaintedOver(offsetX / blockSize, offsetY / blockSize))
          ctx.rect(offsetX, offsetY, blockSize, blockSize);
      }
    }

    ctx.fill();
  }
}
