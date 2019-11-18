import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Valori } from './valori'
import { valori1 } from './valori1'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})

export class RichiestaService {
  ApiUrl = 'http://localhost:3000/employees';  
  

  constructor(private http: HttpClient) {
    
  }
  postServer(val:Valori){
    this.http.post<Valori>(this.ApiUrl, val).subscribe();
    localStorage.setItem(val.email,JSON.stringify(val))
  }

  postServer1(val1:valori1){
    this.http.post<valori1>(this.ApiUrl, val1).subscribe();
    localStorage.setItem(val1.email1,JSON.stringify(val1))
  }
 
  getData(key:string){
    return JSON.parse(localStorage.getItem(key))
  }

}

