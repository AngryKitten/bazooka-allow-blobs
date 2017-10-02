import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RandomizerService } from '../../../../services/randomizer/randomizer.service';

@Component({
  selector: 'plot-panel-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss'],
  providers: [RandomizerService]
})
export class StaticComponent implements OnInit {
  moneyVal: number;
  gotMoney = false;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private randomizerService: RandomizerService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.moneyVal = this.randomizerService.getRandomNum(1 /*statService.getMin*/, 5 /*statService.getMax*/);
  }

  getMoney() {
    this.toastr.info(`Payday! +$${this.moneyVal}`);
    this.gotMoney = true;
  }

}
