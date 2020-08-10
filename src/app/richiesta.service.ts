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
  
  

  constructor(private http: HttpClient) {
    
  }
  postServer(val:Valori){
    var ApiUrl = 'http://localhost:3000/test';  
    this.http.post<Valori>(ApiUrl, val).subscribe();
    localStorage.setItem(val.email,JSON.stringify(val))
  }

  postServer1(val1:valori1){
    var ApiUrl = 'http://localhost:3000/test';  
    this.http.post<valori1>(ApiUrl, val1).subscribe();
    localStorage.setItem(val1.email1,JSON.stringify(val1))
  }
 
  getData(key:string){
    return JSON.parse(localStorage.getItem(key))
  }

}

