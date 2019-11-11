import { Component } from '@angular/core';
import {Router} from '@angular/router';



export type EditorType = 'privato' | 'azienda' | 'changepassword' | 'passwordChanged';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})



export class AppComponent {

  constructor(private router:Router){}
  
  toggleEditor(type:string){
    this.router.navigateByUrl(type)
  }
  

}
