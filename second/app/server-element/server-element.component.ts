import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
 /*   Without alias
      @Input() element: [{
              type: string,
              name: string,
              value: string
            }];
  */

  /*  With alias */  
      @Input('serverElement') serverElement: [{
              type: string,
              name: string,
              value: string
            }];

  constructor() { }

  ngOnInit() {
  }
}
