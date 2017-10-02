import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plot-panel-locked',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss']
})
export class LockedComponent implements OnInit {
  @Input() modifier;

  constructor() { }

  ngOnInit() {
  }

}
