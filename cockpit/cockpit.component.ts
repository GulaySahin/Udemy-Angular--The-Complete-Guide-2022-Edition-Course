import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{serverName:string, serverContent:string }>();
  @Output()
  bluePrintCreated = new EventEmitter<{serverName:string, serverContent:string }> ();

  //newServerName='';
  //newServerContent='';

  @ViewChild('serverContentInput')
  serverContentInput:ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement) {
    console.log(this.serverContentInput);

     this.serverCreated.emit({
       serverName:nameInput.value,
       serverContent:this.serverContentInput?.nativeElement.value
     });
  }
  onAddBluePrint(nameInput:HTMLInputElement) {
     this.bluePrintCreated.emit({
      serverName:nameInput.value,
     serverContent:this.serverContentInput?.nativeElement.value
    });
  }


}
