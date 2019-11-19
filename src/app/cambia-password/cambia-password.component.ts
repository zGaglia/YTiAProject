import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, PatternValidator } from '@angular/forms';
import { RichiestaService } from '../richiesta.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AppComponent } from '../app.component';
import {MatSlideToggleChange} from '@angular/material';
import {MatPasswordStrengthComponent} from '@angular-material-extensions/password-strength';
import {ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
 


@Component({
  selector: 'app-cambia-password',
  templateUrl: './cambia-password.component.html',
  styleUrls: ['./cambia-password.component.css'],
  animations: [
    trigger('transitionTest', [
      state('void', style({
        transform: 'translateY(-75%)',
        transition : 0.4,
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CambiaPasswordComponent implements OnInit {

  constructor(private fB: FormBuilder,private serv:RichiestaService, private appObj : AppComponent) { }
  currentState: boolean = true;

  ngOnInit() {
  }

  form2 = this.fB.group({
    email : [null,Validators.required],
    psw1 : [null,Validators.required] ,
    psw2 : [null, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=(.*[*@_\\#$%!<>]))(?=.*[A-Z]).{8,15})")],
    psw3 : [null, Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=(.*[*@_\\#$%!<>]))(?=.*[A-Z]).{8,15})")]
  })

  

  prendiPassEsistente(){
    var mail = this.form2.get("email").value;
    if(this.serv.getData(mail)==null){
      return ;
    }
    var passw = this.serv.getData(this.form2.get("email").value).psw;
    if(!passw)
    {
      passw = this.serv.getData(this.form2.get("email").value).psw1;
    }
    return passw;
  }

  comparePassNew: boolean = false;
  comparePassEsistente: boolean = false;
  differentInputs: boolean = true;

  comparePass2(){
    if(this.form2.get('psw2').value != null){
      var newPass = this.form2.get('psw2').value;
    }
    if(this.form2.get('psw3').value != null){
      var retypePass = this.form2.get('psw3').value;
    }
    if(newPass==retypePass){
      this.comparePassNew = true;
    }
    else{
      this.comparePassNew = false;
    }

    return this.comparePassNew;
  }


  verifyIfPassDifferent(){
    if(this.form2.get('psw1').value != null){
      var oldPassToCheck = this.form2.get('psw1').value;
      if(this.form2.get('psw2').value != null){
        var newPassToCheck = this.form2.get('psw2').value;
      }
    }
    if( (oldPassToCheck!=newPassToCheck) && (this.form2.get('psw2') != null))
    {
      this.differentInputs = true;
    }
    else{
      this.differentInputs = false;
    }

    return this.differentInputs;
  }

  comparePass1(){
    var oldPass = this.prendiPassEsistente();
    if(this.form2.get('psw1').value){
      var insertedPass = this.form2.get('psw1').value;
    }
    if(oldPass==insertedPass)
    {
      this.comparePassEsistente = true;
    }else{
      this.comparePassEsistente = false;
    }
    return this.comparePassEsistente;//return true if passwords are the same
  }

  cambiaPassword(){
    var localPasswordStorage = JSON.parse(localStorage.getItem(this.form2.get('email').value) );
    if(localPasswordStorage.psw != null){
      localPasswordStorage.psw = this.form2.get('psw2').value;
    }
    else
    {
      localPasswordStorage.psw1 = this.form2.get('psw2').value;
    }
    
    localStorage.setItem(this.form2.get('email').value, JSON.stringify(localPasswordStorage));
    console.log("Password changed!");
    this.appObj.toggleEditor('passwordChanged');
  }

  show1 = false;
  show2 = false;
  show3 = false;

  mostra1(){
    var x = document.getElementById("psw1");
    this.show1 = !(this.show1)
    if(this.show1)
    {
      x.setAttribute('type', 'text');
    }
    else
    {
      x.setAttribute('type', 'password');
    }
  }

  mostra2(){
    var x = document.getElementById("psw2");
    this.show2 = !(this.show2)
    if(this.show2)
    {
      x.setAttribute('type', 'text');
    }
    else
    {
      x.setAttribute('type', 'password');
    }
  }

  mostra3(){
    var x = document.getElementById("psw3");
    this.show3 = !(this.show3)
    if(this.show3)
    {
      x.setAttribute('type', 'text');
    }
    else
    {
      x.setAttribute('type', 'password');
    }
  }
}
