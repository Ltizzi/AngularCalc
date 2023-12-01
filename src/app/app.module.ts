import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumbersComponent } from './components/ui/numbers/numbers.component';
import { TopComponent } from './components/ui/top/top.component';
import { RightComponent } from './components/ui/right/right.component';
import { DisplayComponent } from './components/ui/display/display.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    TopComponent,
    RightComponent,
    DisplayComponent,
    CalculatorComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
