import { Component, OnInit } from '@angular/core';
import {  FormControl } from '@angular/forms';
import { IUsuario } from './usuario';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import {NgModule} from "@angular/core";
import { Subscriber, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  form: FormGroup;
  urlNova:string;

  uri: 'https://localhost:5001/';
  

  constructor(fb: FormBuilder, private http: HttpClient) {
  }
  ngOnInit() {
  }

  onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }

  sendPost(){
    this.urlNova = this.uri+'/'+this.form.get('email').value+'/'+this.form.get('ganho').value+'/'+this.form.get('endereco')+'/default';
    // this.form.setValue({: this.urlNova});
    return this.http.post(this.urlNova, '', httpOptions);
  }
}
