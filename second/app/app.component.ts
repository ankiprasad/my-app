import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  
  serverElements: Array<{type: string, name: string, content: string}> = [];

  cretaeServer(data: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: data.serverName,
      content: data.serverContent
    });
  }

  createBluePrintServer(data: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: data.serverName,
      content: data.serverContent
    });
  }
}
