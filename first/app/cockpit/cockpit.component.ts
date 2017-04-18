import { 
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.Native
  encapsulation: ViewEncapsulation.None
})
export class CockpitComponent implements OnInit {
  /* without alais
  @Output() servercreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintServerCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  */
  /* with alais */
  @Output('screated') servercreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpcreated') blueprintServerCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //serverName: string;
  //serverContent: string;
  @ViewChild('serverName') serverName: ElementRef;
  @ViewChild('serverContent') serverContent: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  
  addServer(){
    this.servercreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: this.serverContent.nativeElement.value
    });

    this.clearFields();
  }

  addBluePrintServer(){
    this.blueprintServerCreated.emit({
      serverName: this.serverName.nativeElement.value,
      serverContent: this.serverContent.nativeElement.value
    });

    this.clearFields();
  }

  clearFields(){
    this.serverName.nativeElement.value = "";
    this.serverContent.nativeElement.value =  "";
  }

}
