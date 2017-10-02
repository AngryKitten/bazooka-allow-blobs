import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plot-banner-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() modifier;

  constructor() { }

  ngOnInit() {
  }

}
