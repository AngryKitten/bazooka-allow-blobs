import { Component, OnInit } from '@angular/core';
import { RandomizerService } from '../../services/randomizer.service';

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
    this.numPlots = this.randomizerService.getRandomNum(1, 6);
    let totalWidth, remainingWidth, minWidth;
    // initialize columnwidths
    while (this.widthArray.length < 2) {
      this.widthArray = [];
      totalWidth = 0;
      remainingWidth = 100;
      minWidth = 20;
      while (remainingWidth > minWidth) // generate random numbers adding up to 100
      {
        let newWidth = this.randomizerService.getRandomNum(minWidth, remainingWidth);
        this.widthArray.push(newWidth);
        remainingWidth -= newWidth;
        totalWidth += newWidth;
      }
    }
    // add any extra width to the last block
    this.widthArray[this.widthArray.length - 1] += remainingWidth;
    console.log(this.widthArray);
    console.log(totalWidth + remainingWidth);
    // shuffle, since the width generator doesn’t generate linearly distributed random numbers
    for (let i = this.widthArray.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [this.widthArray[i - 1], this.widthArray[j]] = [this.widthArray[j], this.widthArray[i - 1]];
    }
    console.log(this.widthArray);
  }

}
