import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SettingsSidebarComponent } from './settings-sidebar/components/settings-sidebar/settings-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsSidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
