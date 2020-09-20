import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule 
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, FirstComponent, SecondComponent, TopBarComponent, CalculatorComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
