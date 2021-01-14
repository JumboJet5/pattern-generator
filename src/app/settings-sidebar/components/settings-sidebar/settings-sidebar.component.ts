import {Component, EventEmitter, HostBinding, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

export interface IPatternSettings {
  sideA: number;
  sideB: number;
}

@Component({
  selector: 'pg-settings-sidebar',
  templateUrl: './settings-sidebar.component.html',
  styleUrls: ['./settings-sidebar.component.scss']
})
export class SettingsSidebarComponent implements OnInit, OnDestroy {
  @Output() public settingsChange: EventEmitter<IPatternSettings> = new EventEmitter<IPatternSettings>()
  @HostBinding('class.mat-elevation-z8') public elevation: boolean = true;
  public settingsForm: FormGroup = new FormGroup({
    sideA: new FormControl(2),
    sideB: new FormControl(2),
  });
  private _unsubscribe$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.settingsForm.valueChanges
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe(value => this.settingsChange.emit(value));
  }

  public ngOnDestroy(): void {
    this._unsubscribe$.next();
    this._unsubscribe$.complete();
  }
}
