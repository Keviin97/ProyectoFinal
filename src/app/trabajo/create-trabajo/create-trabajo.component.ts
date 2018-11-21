import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TrabajoService } from '../../trabajo.service';
import { Observable} from 'rxjs';
import { Trabajo } from '../../trabajo';

@Component({
  selector: 'app-create-trabajo',
  templateUrl: './create-trabajo.component.html',
  styleUrls: ['./create-trabajo.component.css']
})
export class CreateTrabajoComponent {

  // our angular form
  create_trabajo_form: FormGroup;
 
  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_trabajos_event = new EventEmitter();

  // initialize 'product service', 'category service' and 'form builder'
  constructor(
      private trabajoService: TrabajoService,
      formBuilder: FormBuilder
  ){
      // based on our html form, build our angular form
      this.create_trabajo_form = formBuilder.group({
        Nombre: ["", Validators.required],
        Requisitos: ["", Validators.required],
        Conocimientos: ["", Validators.required],
        Beneficios: ["", Validators.required],
        Fecha_Publicacion: ["", Validators.required]
      });
  }

  // user clicks 'create' button
  createTrabajo(){
      // send data to server
        console.log(this.create_trabajo_form.value);
        var eachtrabajo = 
        {
            "Nombre": this.create_trabajo_form.controls['Nombre'].value,
            "Requisitos": this.create_trabajo_form.controls['Requisitos'].value,
            "Conocimientos": this.create_trabajo_form.controls['Conocimientos'].value,
            "Beneficios": this.create_trabajo_form.controls['Beneficios'].value,
            "Fecha_Publicacion": this.create_trabajo_form.controls['Fecha_Publicacion'].value
        };

        console.log(eachtrabajo);

      this.trabajoService.createTrabajo(eachtrabajo)
          .subscribe(
               trabajo => {
                  // show an alert to tell the user if product was created or not
                  console.log(trabajo);

                  // go back to list of products
                  this.readtrabajos();
               },
               error => console.log(error)
           );
  }

  // user clicks the 'read products' button
  readtrabajos(){
      this.show_read_trabajos_event.emit({ title: "Listado de trabajos" });
  }

  // what to do when this component were initialized
  ngOnInit(){
  }

}
