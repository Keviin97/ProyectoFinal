import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {UsuarioService} from './usuario.service';

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
  error = false;

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
    this.opciones = true;
  }

  Trabajos(){
    this.logeado = false;
    this.solicitantes = false;
    this.trabajos = true;
    this.opciones = true;
  }

  salir(){
    this.logeado = true;
    this.solicitantes = false;
    this.trabajos = false;
    this.opciones = false;
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
          this.trabajos = false;
          this.opciones = true;
        }else{
          this.login_form.reset();
          this.error=true;
        }
      },
      error => console.log(error)
    );
  }
}
