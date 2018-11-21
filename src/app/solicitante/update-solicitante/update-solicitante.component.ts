import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SolicitanteService } from '../../solicitante.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-update-solicitante',
  templateUrl: './update-solicitante.component.html',
  styleUrls: ['./update-solicitante.component.css'],
  providers: [SolicitanteService]
})
export class UpdateSolicitanteComponent implements OnChanges {

  // our angular form
    update_solicitante_form: FormGroup;
  
    @Output() show_read_solicitantes_event = new EventEmitter();
    @Input() id_Solicitante;

    // initialize solicitante & category services
    constructor(
        private solicitanteService: SolicitanteService,
        private formBuilder: FormBuilder
    ){

        // build angular form
        this.update_solicitante_form = this.formBuilder.group({
          Nombre: ["", Validators.required],
          Email: ["", Validators.required],
          Telefono: ["", Validators.required],
          Fecha_Nacimiento: ["", Validators.required],
          DPI: ["", Validators.required],
          Experiencia: ["", Validators.required]
        });
    }

    // user clicks 'create' button
    updateSolicitante(){

        // add solicitante_id in the object so it can be updated
        this.update_solicitante_form.value.id_Solicitante = this.id_Solicitante;

        // send data to server
        this.solicitanteService.updateSolicitante(this.update_solicitante_form.value)
            .subscribe(
              solicitante => {
                    // go back to list of solicitantes
                    this.readSolicitantes();
                },
                error => console.log(error)
            );
    }

    // user clicks the 'read solicitantes' button
    readSolicitantes(){
        this.show_read_solicitantes_event.emit({ title: "Listado de solicitantes" });
    }

    // call the record when 'solicitante_id' was changed
    ngOnChanges(){

        // read one solicitante record
        this.solicitanteService.readOneSolicitante(this.id_Solicitante)
            .subscribe(solicitante => {

                // put values in the form
                this.update_solicitante_form.patchValue({
                  Nombre: solicitante.Nombre,
                  Email: solicitante.Email,
                  Telefono: solicitante.Telefono,
                  Fecha_Nacimiento: solicitante.Fecha_Nacimiento,
                  DPI: solicitante.DPI,
                  Experiencia: solicitante.Experiencia
                });
            });
    }

    // read categories from database
    ngOnInit(){
      
    }
}
