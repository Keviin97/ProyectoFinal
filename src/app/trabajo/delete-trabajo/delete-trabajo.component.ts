import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TrabajoService } from '../../trabajo.service';
import { Observable} from 'rxjs';
import { Trabajo } from '../../trabajo';

@Component({
  selector: 'app-delete-trabajo',
  templateUrl: './delete-trabajo.component.html',
  styleUrls: ['./delete-trabajo.component.css'],
  providers: [TrabajoService]
})
export class DeleteTrabajoComponent {

  @Output() show_read_trabajos_event = new EventEmitter();
  @Input() id_Trabajo;

  constructor(private trabajoService: TrabajoService){}
 
    // user clicks 'yes' button
    deleteProduct(){
 
        // delete data from database
        this.trabajoService.deleteTrabajo(this.id_Trabajo)
            .subscribe(
                 trabajo => {
 
                    // show an alert to tell the user if product was created or not
                    console.log(trabajo);
 
                    // go back to list of products
                    this.readTrabajos();
                 },
                 error => console.log(error)
             );
    }
 
    // user clicks the 'read products' button
    readTrabajos(){
        this.show_read_trabajos_event.emit({ title: "Listado de trabajos" });
    }

}
