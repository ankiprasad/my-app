import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1,2,3,4,5];

  numbersList = [1,2,3,4,5];
  onlyOdd = false;
  buttonText = "show Odd";
  status = true;

  showNmbers(){
    this.onlyOdd = !this.onlyOdd;
    this.buttonText = this.buttonText === 'show Odd' ? "Show Even" : "Show Odd";
  }
}
