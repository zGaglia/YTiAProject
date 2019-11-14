import { Component } from '@angular/core';
import {Router} from '@angular/router';



export type EditorType = 'privato' | 'azienda' | 'changepassword' | 'passwordChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})



export class AppComponent {

  showFiller = false;

  constructor(private router:Router){}
  
  toggleEditor(type:string){
    this.router.navigateByUrl(type);
    this.toggleSideNav();
  }

  toggleSideNav(){
    this.showFiller = !(this.showFiller)
    if(this.showFiller){
      document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
      var itemsSideNav:any = document.getElementsByClassName('example-container');
          for (let i = 0; i < itemsSideNav.length; i++) {
              let element = itemsSideNav[i];
              element.style.width = 'auto';
          }
      var itemsMain:any = document.getElementsByClassName('main');
        for (let i = 0; i < itemsMain.length; i++) {
            let element = itemsMain[i];
            element.style.marginLeft = 'auto';
        } 
    }
  if(!this.showFiller){
    var itemsSideNav:any = document.getElementsByClassName('example-container');
          for (let i = 0; i < itemsSideNav.length; i++) {
              let element = itemsSideNav[i];
              element.style.width = 'auto';
          }
      var itemsMain:any = document.getElementsByClassName('main');
        for (let i = 0; i < itemsMain.length; i++) {
            let element = itemsMain[i];
            element.style.marginLeft = 'auto';
        } 
      document.body.style.backgroundColor = "white";
  }

  }

}
