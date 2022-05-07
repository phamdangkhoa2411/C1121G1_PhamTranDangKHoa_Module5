import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1: number;
  num2: number;
  choose: string;
  result: number;

  calculate() {
    switch (this.choose) {
      case ("+"):
        this.result = (this.num1 + this.num2);
        break;
      case ("-") :
        this.result = (this.num1 - this.num2);
        break;
      case ("x") :
        this.result = (this.num1 * this.num2);
        break;
      case ("/") :
        if (this.num2 == 0) {
        alert(  "num2 not be 0");
        } else {
          this.result = (this.num1 / this.num2);
        }
        break;
      default :
        this.result= 0;
        break;

    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
