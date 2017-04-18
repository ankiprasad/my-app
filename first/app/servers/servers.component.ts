import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  /*
      selector: 'app-server'   ->  <app-server></app-server>  		    // by elements
		  selector: [app-server]	 ->  <div app-server></div>     		    // by attribute
			selector: '.app-server'	 ->  <div class="app-server"></div>     // by class 
  */
  templateUrl: './servers.component.html',
  /*
    template: '<app-servers><app-server></spp-server></app-servers>'  // Dont wrap it two lines
		template: `<app-servers>
							  <app-server></app-server>   // Component nesting
						  </app-servers>`
  */
  styleUrls: ['./servers.component.css']
  /*
        style: [`
    					h3 {
    						color: #ccc;
    					}
    				`]
		    styleUrls: [	
  					`.app/app.component.css`,
  					`.app/app.component1.css`,
  					]
  */
})
export class ServersComponent implements OnInit {
  isDisabled: boolean = false;
  serverStatus: string = "server is not created";
  data: string = "";
  serverName: string = "Tomcat";
  isServerCreated: boolean = false;
  status: string = "";
  servers: Array<any> = [
    "server 0",
    "server 1",
    "server 2",
    "server 3",
    "server 4",
  ];
  constructor() { 
      setTimeout( () => {
          this.isDisabled = true;
      }, 2500);

      this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
    
  }
  
  createServer(){
    this.isServerCreated = true;
    this.serverStatus = "Server is created.";
  }

  getData(event: Event){
    //  this.data =  (<any>event.target).value;
    this.data =  (<HTMLInputElement>event.target).value;
  }

  getColor(){
    return this.status === 'online' ? 'green' : 'red';
  }
}
