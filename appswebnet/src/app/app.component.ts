import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public featureSelect:string = 'recipe';
  reciveSelect(event:string) {
    this.featureSelect = event;
  }

}
