import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SolicitanteService } from '../../solicitante.service';
import { Observable} from 'rxjs';
import { Solicitante } from '../../solicitante';

@Component({
  selector: 'app-read-solicitante',
  templateUrl: './read-solicitante.component.html',
  styleUrls: ['./read-solicitante.component.css'],
  providers: [SolicitanteService]
})
export class ReadSolicitanteComponent implements OnInit {
  // store list of Solicitantes
  solicitantes: Solicitante[];
  @Output() show_create_solicitante_event=new EventEmitter();
  @Output() show_read_one_solicitante_event=new EventEmitter();
  @Output() show_update_solicitante_event=new EventEmitter();
  @Output() show_delete_solicitante_event=new EventEmitter();
  // initialize SolicitanteService to retrieve list Solicitantes in the ngOnInit()
  constructor(private solicitanteService: SolicitanteService){}

  // methods that we will use later
  createSolicitante(){
    // tell the parent component (AppComponent)
    this.show_create_solicitante_event.emit({
      title: "Nuevo solicitante"
  });
  }
  readOneSolicitante(id_Solicitante){
    console.log(id_Solicitante);
    // tell the parent component (AppComponent)
    this.show_read_one_solicitante_event.emit({
        id_Solicitante: id_Solicitante,
        title: "Solicitante"
    });
  }
  updateSolicitante(id_Solicitante){
    console.log(id_Solicitante);
    // tell the parent component (AppComponent)
    this.show_update_solicitante_event.emit({
      id_Solicitante: id_Solicitante,
      title: "Actualizar solicitante"
  });
  }
  deleteSolicitante(id_Solicitante){
    // tell the parent component (AppComponent)
    this.show_delete_solicitante_event.emit({
      id_Solicitante: id_Solicitante,
      title: "Borrando solicitante"
  });
  }

  // Read Solicitantes from API.
  ngOnInit(){
      this.solicitanteService.readSolicitantes()
          .subscribe(solicitantes =>
              this.solicitantes=solicitantes['records']
          );
  }

}
