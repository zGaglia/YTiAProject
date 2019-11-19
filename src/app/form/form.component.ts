import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import { Valori } from '../valori';
import { RichiestaService } from '../richiesta.service';
import { AppComponent } from '../app.component';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
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
export class FormComponent implements OnInit { 

  constructor(private fb:FormBuilder, private rich:RichiestaService, private appObj: AppComponent) { }

  show = false;
  checked = false;
  currentState: boolean = true;
  check(){
    this.checked = !this.checked;
  }

  mostra(){
    var x = document.getElementById("psw");
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

  form1 = this.fb.group({
    nome:["",[Validators.required]],
    cognome:["",[Validators.required]],
    cf:["",[Validators.required,Validators.pattern("^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]")]],
    telefono:["",[Validators.required]],
    cap:["",[Validators.required]],
    indirizzo:["",[Validators.required]],
    n:["",[Validators.required]],
    email:["",[Validators.required]],
    psw:["",[Validators.required,Validators.pattern("((?=.*\\d)(?=.*[a-z])(?=(.*[*@_\\#$%!<>]))(?=.*[A-Z]).{8,15})")]],
    capSpedizione:['',''],
    indirizzoSpedizione:['',''],
    nSpedizione:['','']

  })

  ngOnInit() {
  }
  submit(){
    var valori = new Valori();
    valori.nome = this.form1.get("nome").value;
    valori.cognome = this.form1.get("cognome").value;
    valori.cf = this.form1.get("cf").value;
    valori.telefono = this.form1.get("telefono").value;
    valori.cap = this.form1.get("cap").value;
    valori.indirizzo = this.form1.get("indirizzo").value;
    valori.n = this.form1.get("n").value;
    valori.email = this.form1.get("email").value;
    valori.psw = this.form1.get("psw").value;
    valori.capSpedizione = this.form1.get("capSpedizione").value;
    valori.indirizzoSpedizione = this.form1.get("indirizzoSpedizione").value;
    valori.nSpedizione = this.form1.get("nSpedizione").value;

   if(this.rich.getData(valori.email)!=localStorage.getItem(valori.email)){
    this.appObj.emailDuplicateError(); 
    return
   }
    this.rich.postServer(valori);
    this.appObj.registrationComplete();
  }
  
   
}


