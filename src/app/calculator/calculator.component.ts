import { Component, OnInit } from '@angular/core';
import { buttons } from '../buttons';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons = buttons;
  curVal: number = 0;
  opVal: number = 0;
  pastVal: number = 0;
  operator: string = 'none';

  constructor() { }

  ngOnInit() {
  }

  update(value: string){
    let valNum = Number(value);
    let curStr = this.curVal.toString();
    if(!isNaN(Number(value))){
      curStr = curStr + value;
      this.curVal = parseFloat(curStr);
    }
    else{
      switch(value){
        case '+':
        case '-':
        case 'x':
        case '/': {
          if(this.operator!=='none'){
            this.pastVal = this.curVal;
          }
          this.curVal = 0;
          this.operator = value;
          break;
        }
        case 'C':{
          this.pastVal = 0;
          this.curVal = 0;
          this.opVal = 0;
          this.operator = 'none';
          break;
        }
        case '+/-':{
          this.curVal = 0 - this.curVal;
        }
        case '=': {
          if(this.opVal === 0){
            this.opVal = this.curVal;
          }
          switch(this.operator){
            case 'x':{
              this.curVal = this.pastVal * this.opVal;
              break;
            }
            case '/':{
              this.curVal = this.pastVal / this.opVal;
              break;
            }
            case '+':{
              this.curVal = this.pastVal + this.opVal;
              break;
            }
            case '-':{
              this.curVal = this.pastVal - this.opVal;
              break;
            }
            default: {
              break;
            }
          }
        }
        default: {
          break;
        }
      }
    }

    document.getElementById('display').innerHTML = this.curVal.toString();

  }

}