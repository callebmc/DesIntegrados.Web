import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  FormControl } from '@angular/forms';
import { IUsuario } from './usuario';
import  {  FormBuilder,  FormGroup  }  from  '@angular/forms';
import {NgModule} from "@angular/core";
import { Subscriber, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  form: FormGroup;
  dados: IUsuario;
  urlNova:string;
  bla: String;

  uri:string;  

  constructor(fb: FormBuilder, private http: HttpClient) {
  }
  ngOnInit() {
    this.dados = new class implements IUsuario {
      Nome: string;
      email: string;
      endereco: string;
      ganho: Float32Array;
      tamanho: string;
    }
    this.uri = 'https://localhost:5001/usuario/';
  }

  /*onSubmitModelBased() {
    console.log("model-based form submitted");
    console.log(this.form);
  }*/

  sendPost(){
    let objetoParaOBackEnd = {
      Nome: this.dados.Nome,
      email: this.dados.email,
      endereco: this.dados.endereco,
      ganho: this.dados.ganho,
      tamanho: this.dados.tamanho
    }

    console.log(objetoParaOBackEnd);
    //COMENTEI ESSE CÓDIGO AQUI PQ NAO SABIA O QUE FAZIA; MAS GERALMENTE UMA FUNÇÃO DE POST NÃO TEM RETURN

    //FAZ O POST AQUI DAÍ.
    this.urlNova = this.uri + this.dados.email +'/' + this.dados.ganho + '/' + this.dados.endereco + '/default';
    // this.form.setValue({: this.urlNova});
    this.http.post(this.urlNova, '', httpOptions);
  }
}
