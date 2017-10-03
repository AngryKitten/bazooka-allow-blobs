import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomOptions } from './toastr-config';

import { AppComponent } from './app.component';
import { PlotterComponent } from './components/plotter/plotter.component';

// plot components
import { GenericComponent } from './components/plots/generic/generic.component';

// services
import { StaticDataService } from './services/static-data/static-data.service';
import { RandomizerService } from './services/randomizer/randomizer.service';
import { StaticComponent } from './components/plots/panels/static/static.component';
import { LockedComponent } from './components/plots/panels/locked/locked.component';
import { InfoComponent } from './components/plots/banners/info/info.component';

// directives

@NgModule({
  declarations: [
    AppComponent,
    PlotterComponent,
    GenericComponent,
    StaticComponent,
    LockedComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [
    { provide: ToastOptions, useClass: CustomOptions },
    StaticDataService,
    RandomizerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
