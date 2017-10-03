import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private cdr: ChangeDetectorRef) { }

  stripes: number[] = [];

  ngOnInit() {
    this.generatePlotters();
  }

  generatePlotters() {
    this.stripes = [];
    this.cdr.detectChanges();
    this.stripes = [0, 0, 0, 0];
  }

  next() {
    this.generatePlotters();
  }

}
