import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  loadedFeature='recipe';

  onNavigate(feature:string) {
  this.loadedFeature=feature;
  }

  serverElements = [{type:'server', name:'TestServer', content:'Jus a test!'}];

  onServerAdded(serverData : {serverName:string, serverContent:string }) {
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
  onAddBluePrintAdded(bluePrintData : {serverName:string, serverContent:string }) {
    this.serverElements.push({
      type:'blueprint',
      name:bluePrintData.serverName,
      content:bluePrintData.serverContent
    });
  }
}
