import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericComponent } from './components/plots/generic/generic.component';
import { PlotterComponent } from './components/plotter/plotter.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericComponent,
    PlotterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
