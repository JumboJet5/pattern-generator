import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsSidebarComponent } from './settings-sidebar/components/settings-sidebar/settings-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {ReactiveFormsModule} from "@angular/forms";
import { PatternCellComponent } from './settings-sidebar/components/pattern-cell/pattern-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsSidebarComponent,
    PatternCellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
