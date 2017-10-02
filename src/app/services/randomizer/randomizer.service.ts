import { Injectable } from '@angular/core';

@Injectable()
export class RandomizerService {

  getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
