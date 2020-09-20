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
  pastVal :number = 0;

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
        
      }
    }

    document.getElementById('display').innerHTML = this.curVal.toString();

  }

}