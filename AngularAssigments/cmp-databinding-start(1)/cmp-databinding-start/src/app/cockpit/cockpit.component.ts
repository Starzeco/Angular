import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //newServerName = '';
  //newServerContent = '';
  @Output() serverCreated=new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated=new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('nazwaReferencji') serverContentInput: ElementRef;

  onAddServer(serverNameReceived: HTMLInputElement) {
    this.serverCreated.emit({serverName: serverNameReceived.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameReceived) {
    this.blueprintCreated.emit({serverName: serverNameReceived.value, serverContent: this.serverContentInput.nativeElement.value});
    /*this.blueprintCreated.emit({serverName: serverNameReceived.value, serverContent: this.newServerContent});  TAK BYŁOBY gdyby była zmienna newServerContent i zapełniana przez ngModel Property Binding*/
  }
  constructor() { }

  ngOnInit() {
  }

}
