import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppComponent } from './app.component';
import { PlotterComponent } from './components/plotter/plotter.component';

// plot components
import { GenericComponent } from './components/plots/generic/generic.component';

// services
import { RandomizerService } from './services/randomizer.service';

// directives

@NgModule({
  declarations: [
    AppComponent,
    PlotterComponent,
    GenericComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule
  ],
  providers: [RandomizerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
