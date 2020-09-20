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
  tempVal: number = 0;
  operator: string = 'none';

  constructor() { }

  ngOnInit() {
  }

  update(value: string){
    let curStr = this.curVal.toString();
    if(!isNaN(Number(value))){
      curStr = curStr + value;
      this.curVal = Number(curStr);
    }
    else{
      switch(value){
        case '+':
        case '-':
        case 'x':
        case '/': {
          if(this.operator!=='none'){
            this.runEquals(value);
          }
            this.pastVal = this.curVal;
            this.curVal = 0;
            this.operator = value;
            this.opVal = 0;
        
          break;
        }
        case '<-':{
          curStr = curStr.substring(0,curStr.length-1);
          this.curVal = Number(curStr);
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
          break;
        }
        case '=': {
          this.runEquals(value);
          break;
        }
        default: {
          break;
        }
      }
    }

    document.getElementById('display').innerHTML = this.curVal.toString();

  }

  runEquals(value: string){
            if(this.opVal === 0){
            this.opVal = this.curVal;
            this.curVal = this.pastVal;
          }
          switch(this.operator){
            case 'x':{
              this.tempVal = this.curVal;
              this.curVal = this.curVal * this.opVal;
              this.pastVal = this.curVal;
              break;
            }
            case '/':{
              this.tempVal = this.curVal;
              this.curVal = this.curVal / this.opVal;
              this.pastVal = this.curVal;
              break;
            }
            case '+':{
              this.tempVal = this.curVal;
              this.curVal = this.curVal + this.opVal;
              this.pastVal = this.curVal;
              break;
            }
            case '-':{
              this.tempVal = this.curVal;
              this.curVal = this.curVal - this.opVal;
              this.pastVal = this.curVal;
              break;
            }
            default: {
              break;
            }
          }
        }
  

}