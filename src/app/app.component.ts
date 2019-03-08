import { Component } from '@angular/core';
import { dec2Roman } from 'dec2roman';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass01';
  num: string;
  decNum: number;

  convertToRoman(decNum) {
    if (decNum.target.value != '') 
    this.num = dec2Roman(decNum.target.value);
    else
    this.num='';
  }
}
