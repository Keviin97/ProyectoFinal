import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitudService } from '../../solicitud.service';
import { SolicitanteService } from '../../solicitante.service';
import { Observable} from 'rxjs';
import { Solicitud } from '../../solicitud';
import { Solicitante } from '../../solicitante';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-read-solicitud',
  templateUrl: './read-solicitud.component.html',
  styleUrls: ['./read-solicitud.component.css'],
  providers: [SolicitudService]
})
export class ReadSolicitudComponent implements OnInit {

  // store list of solicituds
  trabajos: Solicitud[];
  solicitantes: Solicitante[];
  create_solicitud_form: FormGroup;

  // initialize solicitudService to retrieve list solicituds in the ngOnInit()
  constructor(private solicitudService: SolicitudService, private solicitanteService: SolicitanteService, 
    formBuilder: FormBuilder){

    this.create_solicitud_form = formBuilder.group({
      id_Trabajo: [''],
      id_Solicitante: ["", Validators.required]
    });

  }

  nombre = '';
  solicitants: any[];
  addsolicitantes = false;


  // methods that we will use later
  createSolicitud(){
    console.log(this.create_solicitud_form.value);
    this.solicitudService.createSolicitud(this.create_solicitud_form.value)
    .subscribe(
          trabajo => {
            // show an alert to tell the user if product was created or not
            console.log(trabajo);
            this.read();
            this.addsolicitantes = false;
          },
          error => console.log(error)
      );
  }
  
  selectSolicitantes(id, nombre, solicitantes)
  {
    
    this.nombre = nombre;
    this.addsolicitantes = true;
    this.solicitants= solicitantes;
    this.create_solicitud_form.patchValue({id_Trabajo: id})
    console.log(this.solicitants);
  }


  desasignar(solicitud){
    console.log(solicitud.id_Solicitud);
    this.solicitudService.deleteSolicitud(solicitud.id_Solicitud)
    .subscribe(
          solicitante => {
            console.log(solicitante);
            this.read();
            this.addsolicitantes = false;
          },
          error => console.log(error)
      );
  }

  read(){
    this.solicitudService.readSolicitudes()
      .subscribe(trabajos =>
          {this.trabajos=trabajos['Trabajos'];
        console.log(trabajos);}
      );

    this.solicitanteService.readSolicitantes()
    .subscribe(solicitantes =>
        {this.solicitantes=solicitantes['records'];
      console.log(solicitantes);}
    );
  }

  // Read solicituds from API.
  ngOnInit(){
      this.read();
  }

}
