import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  inputValue = 'Old input value';

  onKeyUp(newInputValue:string) {
    this.inputValue = newInputValue;
  }
}
