import { Component, OnInit } from '@angular/core';
import { RandomizerService } from '../../services/randomizer/randomizer.service';

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.scss'],
  providers: [RandomizerService]
})
export class PlotterComponent implements OnInit {
  numPlots: number;
  widthArray: number[] = [];

  constructor(private randomizerService: RandomizerService) { }

  ngOnInit() {
    this.numPlots = this.randomizerService.getRandomNum(1, 5);
    let remainingWidth = 100;
    const minWidth = 20;
    const maxWidth = 100 / this.numPlots;
    for (let i = 0; i < this.numPlots; i++) {
      const newWidth = this.randomizerService.getRandomNum(minWidth, maxWidth);
      remainingWidth -= newWidth;
      this.widthArray.push(newWidth);
    }
    if (remainingWidth >= 20) {
      this.widthArray.push(remainingWidth);
    } else {
      this.widthArray[this.widthArray.length - 1] += remainingWidth;
    }
    for (let i = this.widthArray.length; i; i--) {
      const j = Math.floor(Math.random() * i);
      [this.widthArray[i - 1], this.widthArray[j]] = [this.widthArray[j], this.widthArray[i - 1]];
    }
  }

}
