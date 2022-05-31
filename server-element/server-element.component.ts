import { Component, Input, OnInit, SimpleChange, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

   @Input()
  element?: {
    type: string;
    name: string;
    content: string;
  }

  constructor() {
    console.log('constructor called!');

  }
  ngOnChanges(changes:SimpleChange) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');

  }
  ngDoCheck() {
    console.log('ngDoCheck called!');

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called!');

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit callled!');

  }


}
