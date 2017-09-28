import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'plot-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.scss']
})
export class GenericComponent implements OnInit {
  @Input() width;

  ngOnInit() {
  }

}
