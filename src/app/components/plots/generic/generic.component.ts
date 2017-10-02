import { Component, Input, OnInit } from '@angular/core';
import { StaticDataService } from './../../../services/static-data/static-data.service';
import { RandomizerService } from './../../../services/randomizer/randomizer.service';

@Component({
  selector: 'plot-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss'],
  providers: [StaticDataService, RandomizerService]
})
export class GenericComponent implements OnInit {
  @Input() width;
  selector: Object[] = [];
  selectedPlot: Object;
  modifier: string;

  constructor(private staticDataService: StaticDataService, private randomizerService: RandomizerService) { }

  ngOnInit() {
    this.staticDataService.getJSON('plot-types').subscribe(plots => {
      for (let i = 0; i < plots.length; i++) {
        if (this.width >= plots[i]['minWidth'] && this.width <= plots[i]['maxWidth']) {
          this.selector.push(plots[i]);
        }
      }
      this.selectedPlot = this.selector[this.randomizerService.getRandomNum(0, this.selector.length - 1)];
      this.modifier = this.selectedPlot['modifier'];
    });
  }

}
