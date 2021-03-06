import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { CalculatorComponent} from '../calculator/calculator.component';
import { SampleComponent } from '../sample/sample.component';

const routes: Routes = [
  { path: 'calculator-component', component: CalculatorComponent},
  { path: 'sample-component', component: SampleComponent},
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }