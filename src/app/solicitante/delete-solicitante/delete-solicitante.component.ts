import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SolicitanteService } from '../../solicitante.service';
import { Observable} from 'rxjs';
import { Solicitante } from '../../solicitante';

@Component({
  selector: 'app-delete-solicitante',
  templateUrl: './delete-solicitante.component.html',
  styleUrls: ['./delete-solicitante.component.css'],
  providers: [SolicitanteService]
})
export class DeleteSolicitanteComponent{

  @Output() show_read_solicitantes_event = new EventEmitter();
  @Input() id_Solicitante;

  constructor(private solicitanteService: SolicitanteService){}
 
    // user clicks 'yes' button
    deleteProduct(){
 
        // delete data from database
        this.solicitanteService.deleteSolicitante(this.id_Solicitante)
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

}
