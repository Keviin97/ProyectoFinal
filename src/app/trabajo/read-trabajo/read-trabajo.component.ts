import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TrabajoService } from '../../trabajo.service';
import { Observable} from 'rxjs';
import { Trabajo } from '../../trabajo';

@Component({
  selector: 'app-read-trabajo',
  templateUrl: './read-trabajo.component.html',
  styleUrls: ['./read-trabajo.component.css'],
  providers: [TrabajoService]
})
export class ReadTrabajoComponent implements OnInit {

  trabajos: Trabajo[];
  @Output() show_create_trabajo_event=new EventEmitter();
  @Output() show_read_one_trabajo_event=new EventEmitter();
  @Output() show_update_trabajo_event=new EventEmitter();
  @Output() show_delete_trabajo_event=new EventEmitter();
  // initialize trabajoService to retrieve list trabajos in the ngOnInit()
  constructor(private trabajoService: TrabajoService){}

  // methods that we will use later
  createTrabajo(){
    // tell the parent component (AppComponent)
    this.show_create_trabajo_event.emit({
      title: "Nuevo trabajo"
  });
  }
  readOneTrabajo(id_Trabajo){
    console.log(id_Trabajo);
    // tell the parent component (AppComponent)
    this.show_read_one_trabajo_event.emit({
        id_Trabajo: id_Trabajo,
        title: "Trabajo"
    });
  }
  updateTrabajo(id_Trabajo){
    console.log(id_Trabajo);
    // tell the parent component (AppComponent)
    this.show_update_trabajo_event.emit({
      id_Trabajo: id_Trabajo,
      title: "Actualizar trabajo"
  });
  }
  deleteTrabajo(id_Trabajo){
    // tell the parent component (AppComponent)
    this.show_delete_trabajo_event.emit({
      id_Trabajo: id_Trabajo,
      title: "Borrando trabajo"
  });
  }

  // Read trabajos from API.
  ngOnInit(){
      this.trabajoService.readTrabajos()
          .subscribe(trabajos =>
              this.trabajos=trabajos['records']
          );
  }

}
