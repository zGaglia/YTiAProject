import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { valori1 } from '../valori1';
import { RichiestaService } from '../richiesta.service';
import { AppComponent } from '../app.component';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-azienda',
  templateUrl: './azienda.component.html',
  styleUrls: ['./azienda.component.css'],
  animations: [
    trigger('transitionTest', [
      state('void', style({
        transform: 'translateY(-75%)',
        transition : 0.4,
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class AziendaComponent implements OnInit {

  constructor(private fb:FormBuilder, private appObj:AppComponent, private rich1:RichiestaService) { }
  currentState: boolean = true;
  show = false;
  checked = false;

  check(){
    this.checked = !this.checked;
  }

  mostra1(){
    var x = document.getElementById("psw1");
    this.show = !(this.show)
    if(this.show)
    {
      x.setAttribute('type', 'text');
    }
    else
    {
      x.setAttribute('type', 'password');
    }
  }

  togglePass(value: string){
    this.appObj.toggleEditor(value);
  }

  form = this.fb.group({
    societa:["",[Validators.required]],
    pIva:["",[Validators.required,Validators.pattern("^\\d{11}$")]],
    telefono:["",[Validators.required]],
    cap:["",[Validators.required]],
    indirizzo:["",[Validators.required]],
    n:["",[Validators.required]],
    email:["",[Validators.required]],
    psw:["",[Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=(.*[*@_\\#$%!<>]))(?=.*[A-Z]).{8,15})")]],
    cap1Spedizione:['',''],
    indirizzo1Spedizione:['',''],
    n1Spedizione:['',''] 
  })

  ngOnInit() {
  }

  submit(){
    var Valori1 = new valori1();
     Valori1.societa = this.form.get("societa").value;
     Valori1.pIva = this.form.get("pIva").value;
     Valori1.telefono1 = this.form.get("telefono").value;
     Valori1.cap1 = this.form.get("cap").value;
     Valori1.indirizzo1 = this.form.get("indirizzo").value;
     Valori1.n1 = this.form.get("n").value;
     Valori1.email1 = this.form.get("email").value;
     Valori1.psw1 = this.form.get("psw").value;
     Valori1.cap1Spedizione = this.form.get("cap1Spedizione").value;
     Valori1.indirizzo1Spedizione = this.form.get("indirizzo1Spedizione").value;
     Valori1.n1Spedizione = this.form.get("n1Spedizione").value;
    
     console.log(this.rich1.getData(Valori1.email1))
     this.rich1.postServer1(Valori1);
     this.appObj.registrationComplete();    
   }


}
