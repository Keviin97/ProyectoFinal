import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SolicitanteService } from '../../solicitante.service';
import { Observable} from 'rxjs';
import { Solicitante } from '../../solicitante';

@Component({
  selector: 'app-create-solicitante',
  templateUrl: './create-solicitante.component.html',
  styleUrls: ['./create-solicitante.component.css'],
  providers: [SolicitanteService]
})
export class CreateSolicitanteComponent{

  // our angular form
  create_solicitante_form: FormGroup;
 
  // @Output will tell the parent component (AppComponent) that an event happened in this component
  @Output() show_read_solicitantes_event = new EventEmitter();

  // initialize 'product service', 'category service' and 'form builder'
  constructor(
      private solicitanteService: SolicitanteService,
      formBuilder: FormBuilder
  ){
      // based on our html form, build our angular form
      this.create_solicitante_form = formBuilder.group({
        Nombre: ["", Validators.required],
        Email: ["", Validators.required],
        Telefono: ["", Validators.required],
        Fecha_Nacimiento: ["", Validators.required],
        DPI: ["", Validators.required],
        Experiencia: ["", Validators.required]
      });
  }

  // user clicks 'create' button
  createSolicitante(){
      // send data to server
        console.log(this.create_solicitante_form.value);
        var eachSolicitante = 
        {
            "Nombre": this.create_solicitante_form.controls['Nombre'].value,
            "Email": this.create_solicitante_form.controls['Email'].value,
            "Telefono": this.create_solicitante_form.controls['Telefono'].value,
            "Fecha_Nacimiento": this.create_solicitante_form.controls['Fecha_Nacimiento'].value,
            "DPI": this.create_solicitante_form.controls['DPI'].value,
            "Experiencia": this.create_solicitante_form.controls['Experiencia'].value
        };

        console.log(eachSolicitante);

      this.solicitanteService.createSolicitante(eachSolicitante)
          .subscribe(
               solicitante => {
                  // show an alert to tell the user if product was created or not
                  console.log(solicitante);

                  // go back to list of products
                  this.readSolicitantes();
               },
               error => console.log(error)
           );
  }

  // user clicks the 'read products' button
  readSolicitantes(){
      this.show_read_solicitantes_event.emit({ title: "Listado de solicitantes" });
  }

  // what to do when this component were initialized
  ngOnInit(){
  }
}
