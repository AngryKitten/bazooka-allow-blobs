import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  stripes: number[] = [0, 0, 0, 0, 0, 0];

  onScroll() {
    this.stripes.push(0);
  }

}
