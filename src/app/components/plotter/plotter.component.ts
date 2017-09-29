import { Component, OnInit } from '@angular/core';
import { RandomizerService } from '../../services/randomizer.service';

@Component({
  selector: 'app-plotter',
  templateUrl: './plotter.component.html',
  styleUrls: ['./plotter.component.scss'],
  providers: [RandomizerService]
})
export class PlotterComponent implements OnInit {
  plots: IPlot[] = [];

  constructor(private randomizerService: RandomizerService) { }

  ngOnInit() {
    let maxRowSpan = 4;
    let numPlots = 0;
    let remainingWidths = [100, 100, 100, 100];
    const minWidth = 20;

    for (let i = 0; i < maxRowSpan; i++) {
      numPlots = remainingWidths[i] / Math.floor(20);
      if (numPlots > 0) {
        numPlots = this.randomizerService.getRandomNum(1, numPlots);
      }
      const maxWidth = 100 / numPlots;
      let j = 0;
      while (j < numPlots) {
        const newWidth = this.randomizerService.getRandomNum(minWidth, maxWidth);
        const newRows = this.randomizerService.getRandomNum(1, maxRowSpan - i);
        for (let k = 0; k < newRows; k++) {
          remainingWidths[i + k] -= newWidth;
        }
        this.plots.push({width: newWidth, rows: newRows});
        j++;
      }
      if (remainingWidths[i] >= 20) {
        this.plots.push({width: remainingWidths[i], rows: this.randomizerService.getRandomNum(1, maxRowSpan - i)});
      } else {
        this.plots[this.plots.length - 1].width += remainingWidths[i];
      }
    }
    // for (let i = 0; i < numPlots; i++) {
    //   const newWidth = this.randomizerService.getRandomNum(minWidth, maxWidth);
    //   remainingWidth -= newWidth;
    //   widthArray.push(newWidth);
    // }
    // if (remainingWidth >= 20) {
    //   widthArray.push(remainingWidth);
    // } else {
    //   widthArray[widthArray.length - 1] += remainingWidth;
    // }
    // for (let i = widthArray.length; i; i--) {
    //   const j = Math.floor(Math.random() * i);
    //   [widthArray[i - 1], widthArray[j]] = [widthArray[j], widthArray[i - 1]];
    // }
  }

}

interface IPlot {
  width: number;
  rows: number;
}
