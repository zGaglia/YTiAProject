import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';



export type EditorType = 'privato' | 'azienda' | 'changepassword';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('timedAnimation',[
      state('void', style({
        transform: 'translateY(75%)',
        transition: 0.4,
        opacity: 0,
      })),
      transition('void <=> *', animate(750)),
    ]),
  ]
})



export class AppComponent {

  showFiller: boolean = false;
  confirmRegistration: boolean = false;
  emailDuplicate: boolean = false;
  passwordChangedConfirm : boolean = false;

  constructor(private router:Router){}
  
  toggleEditor(type:string){
    this.router.navigateByUrl(type);
    this.toggleSideNav();
    if(this.confirmRegistration){
      this.confirmRegistration = !(this.confirmRegistration)
    }
    if(this.emailDuplicate){
      this.emailDuplicate = !(this.emailDuplicate)
    }
    if(this.passwordChangedConfirm){
      this.passwordChangedConfirm = !(this.passwordChangedConfirm)
    }
  }

  passwordChangedBox(){
    this.passwordChangedConfirm = true;
  }


  emailDuplicateError(){
    this.emailDuplicate = true;
  }

  toggleSideNav(){
    this.showFiller = !(this.showFiller)
  }

  registrationComplete(){
    this.confirmRegistration = !(this.confirmRegistration)
  }

}
