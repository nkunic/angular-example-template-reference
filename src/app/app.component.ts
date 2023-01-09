import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  // Data object
  data = {
    title: 'Old title',
  };

  onKeyUp(newTitle:string) {
    this.data.title = newTitle;
  }
}
