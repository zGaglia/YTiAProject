import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-conferma-cambia-pass',
  templateUrl: './conferma-cambia-pass.component.html',
  styleUrls: ['./conferma-cambia-pass.component.css'],
  animations: [
    trigger('transitionTest', [
      state('void', style({
        transition : 0.4,
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class ConfermaCambiaPassComponent implements OnInit {

  constructor(private appObject: AppComponent) { }

  
  currentState: boolean = true;

  ngOnInit() {
  }

  goHome(){
    this.appObject.toggleEditor('index');
  }

}
