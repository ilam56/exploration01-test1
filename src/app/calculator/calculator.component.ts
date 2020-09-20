import { Component, OnInit } from '@angular/core';
import { buttons } from '../buttons';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttons = buttons;

  constructor() { }

  ngOnInit() {
  }

}