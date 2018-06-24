import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div style="text-align:center">
  <h1>
    Marvellous Infosystems
  </h1>
  Text Field : <input type="text"> <br>
  <app-marvellous-comp></app-marvellous-comp>
</div>`,
  styles: [`input {
    background-color: blue;
    }`]
})
export class AppComponent {
  title = 'Marvellous Infosystems';
}
