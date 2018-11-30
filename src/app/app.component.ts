import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {UsuarioService} from './usuario.service';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService]
})
export class AppComponent {

  login_form: FormGroup;

  logeado = true;
  opciones = false;
  solicitantes = false;
  trabajos = false;
  solicitudes=false;
  error = false;
  footer = false;

  constructor(
    public usuarioService: UsuarioService,
    formBuilder: FormBuilder){
    // based on our html form, build our angular form
    this.login_form = formBuilder.group({
      Usuario: ["", Validators.required],
      Pass: ["", Validators.required]
    });
  }

  Solicitantes(){
    this.logeado = false;
    this.solicitantes = true;
    this.trabajos = false;
    this.solicitudes = false;
    this.opciones = true;
    this.footer = true;
  }

  Trabajos(){
    this.logeado = false;
    this.solicitantes = false;
    this.trabajos = true;
    this.opciones = true;
    this.footer = true;
    this.solicitudes = false;
  }

  Solicitudes(){
    this.logeado = false;
    this.solicitantes = false;
    this.trabajos = false;
    this.opciones = true;
    this.footer = true;
    this.solicitudes = true;
  }

  salir(){
    this.logeado = true;
    this.solicitantes = false;
    this.solicitudes = false;
    this.trabajos = false;
    this.opciones = false;
    this.footer = false;
    this.error=false;
    this.login_form.reset();
  }

  login(){
    this.usuarioService.login(this.login_form.value.Usuario, this.login_form.value.Pass)
    .subscribe(data =>
      {
        console.log(data['Usuario']);
        console.log(data['Pass']);
        if (this.login_form.value.Usuario === data['Usuario'] && this.login_form.value.Pass === data['Pass']) {
          console.log('Logeado');
          this.logeado = false;
          this.solicitantes = true;
          this.solicitudes = false;
          this.trabajos = false;
          this.opciones = true;
          this.footer = true;
        }
      },
      error =>{
        console.log(error);
        console.log('ERROR de logeo');
        this.login_form.reset();
        this.error=true;
      }
    );
  }
}
