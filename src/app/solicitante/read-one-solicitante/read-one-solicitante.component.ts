import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { SolicitanteService } from '../../solicitante.service';
import { Observable} from 'rxjs';
import { Solicitante } from '../../solicitante';

@Component({
  selector: 'app-read-one-solicitante',
  templateUrl: './read-one-solicitante.component.html',
  styleUrls: ['./read-one-solicitante.component.css'],
  providers: [SolicitanteService]
})
export class ReadOneSolicitanteComponent implements OnChanges {

  @Output() show_read_solicitantes_event = new EventEmitter();

  @Input() id_Solicitante;
 
  solicitante: Solicitante;
  constructor(private solicitanteService: SolicitanteService) { }

  readSolicitantes(){
      this.show_read_solicitantes_event.emit({ title: "Listado de solicitantes" });
  }

  // call the record when 'product_id' was changed
  ngOnChanges(){
      this.solicitanteService.readOneSolicitante(this.id_Solicitante)
          .subscribe(solicitante => this.solicitante=solicitante);
  }

}
