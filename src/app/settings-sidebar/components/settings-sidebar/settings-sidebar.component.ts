import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PatternConfigService } from '../../services/pattern-config/pattern-config.service';


@Component({
  selector: 'pg-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: [ './settings-sidebar.component.scss' ],
})
export class SettingsSidebarComponent implements OnInit, OnDestroy {
  @HostBinding('class.mat-elevation-z8') public elevation: boolean = true;
  public settingsForm: FormGroup = new FormGroup({
    sideA: new FormControl(13), sideB: new FormControl(15),
  });
  private _unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private _patternConfigService: PatternConfigService) { }

  ngOnInit(): void {
    this.settingsForm.valueChanges
        .pipe(takeUntil(this._unsubscribe$))
        .subscribe(value => this._patternConfigService.updateConfig(value));

    this._patternConfigService.updateConfig(this.settingsForm.value);
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
