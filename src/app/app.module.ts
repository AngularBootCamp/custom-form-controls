import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsStatesSelectorComponent } from './us-states-selector/us-states-selector.component';

@NgModule({
  declarations: [AppComponent, UsStatesSelectorComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
