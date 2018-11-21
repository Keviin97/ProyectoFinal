import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TrabajoService } from '../../trabajo.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-update-trabajo',
  templateUrl: './update-trabajo.component.html',
  styleUrls: ['./update-trabajo.component.css']
})
export class UpdateTrabajoComponent implements OnChanges {

  // our angular form
  update_trabajo_form: FormGroup;
  
  @Output() show_read_trabajos_event = new EventEmitter();
  @Input() id_Trabajo;

  // initialize trabajo & category services
  constructor(
      private trabajoService: TrabajoService,
      private formBuilder: FormBuilder
  ){

      // build angular form
      this.update_trabajo_form = this.formBuilder.group({
        Nombre: ["", Validators.required],
        Requisitos: ["", Validators.required],
        Conocimientos: ["", Validators.required],
        Beneficios: ["", Validators.required],
        Fecha_Publicacion: ["", Validators.required]
      });
  }

  // user clicks 'create' button
  updateTrabajo(){

      // add trabajo_id in the object so it can be updated
      this.update_trabajo_form.value.id_Trabajo = this.id_Trabajo;

      // send data to server
      this.trabajoService.updateTrabajo(this.update_trabajo_form.value)
          .subscribe(
            trabajo => {
                  // go back to list of trabajos
                  this.readTrabajos();
              },
              error => console.log(error)
          );
  }

  // user clicks the 'read trabajos' button
  readTrabajos(){
      this.show_read_trabajos_event.emit({ title: "Listado de trabajos" });
  }

  // call the record when 'trabajo_id' was changed
  ngOnChanges(){

      // read one trabajo record
      this.trabajoService.readOneTrabajo(this.id_Trabajo)
          .subscribe(trabajo => {

              // put values in the form
              this.update_trabajo_form.patchValue({
                Nombre: trabajo.Nombre,
                Requisitos: trabajo.Requisitos,
                Conocimientos: trabajo.Conocimientos,
                Beneficios: trabajo.Beneficios,
                Fecha_Publicacion: trabajo.Fecha_Publicacion
              });
          });
  }

  // read categories from database
  ngOnInit(){
    
  }

}
