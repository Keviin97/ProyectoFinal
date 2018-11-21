import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { TrabajoService } from '../../trabajo.service';
import { Observable} from 'rxjs';
import { Trabajo } from '../../trabajo';

@Component({
  selector: 'app-read-one-trabajo',
  templateUrl: './read-one-trabajo.component.html',
  styleUrls: ['./read-one-trabajo.component.css'],
  providers: [TrabajoService]
})
export class ReadOneTrabajoComponent implements OnChanges {

  @Output() show_read_trabajos_event = new EventEmitter();

  @Input() id_Trabajo;
 
  trabajo: Trabajo;
  constructor(private trabajoService: TrabajoService) { }

  readTrabajos(){
      this.show_read_trabajos_event.emit({ title: "Listado de trabajos" });
  }

  // call the record when 'product_id' was changed
  ngOnChanges(){
      this.trabajoService.readOneTrabajo(this.id_Trabajo)
          .subscribe(trabajo => this.trabajo=trabajo);
  }
}
