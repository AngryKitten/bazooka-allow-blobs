import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { RandomizerService } from '../../../../services/randomizer/randomizer.service';

@Component({
  selector: 'plot-panel-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss'],
  providers: [RandomizerService]
})
export class StaticComponent implements OnInit {
  @Input() modifier;
  moneyVal: number;
  gotMoney = false;
  message: string;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private randomizerService: RandomizerService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.moneyVal = this.randomizerService.getRandomNum(1 /*statService.getMin*/, 5 /*statService.getMax*/);
    switch (this.modifier) {
      case 'x0':
        this.moneyVal = 0;
        this.message = `Tears. +$0`;
        break;
      case 'x1':
        this.message = `Payday! +$${this.moneyVal}`;
        break;
      case 'x2':
        this.moneyVal = this.moneyVal * 2;
        this.message = `Bankin'!! + $${this.moneyVal}`;
        break;
    }
  }

  getMoney() {
    let currMoney;
    this.gotMoney = true;
    if (localStorage.getItem('money')) {
      currMoney = JSON.parse(localStorage.getItem('money')) + this.moneyVal;
      localStorage.setItem('money', JSON.stringify(currMoney));
    } else {
      currMoney = this.moneyVal;
      localStorage.setItem('money', JSON.stringify(this.moneyVal));
    }
    this.toastr.info(`${this.message} = ${currMoney}`);
  }

}
