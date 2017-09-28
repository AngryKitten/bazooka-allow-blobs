import { Component, OnInit } from '@angular/core';
import { RandomizerService } from '../../services/randomizer.service';

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.scss'],
  providers: [RandomizerService]
})
export class PlotterComponent implements OnInit {
  minCols: number;
  numPlots: number;

  constructor(private randomizerService: RandomizerService) { }

  ngOnInit() {
    this.numPlots = this.randomizerService.getRandomNum(1, 100);
    console.log(this.numPlots);
  }

}
