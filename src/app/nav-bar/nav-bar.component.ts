import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() show_solicitantes_event=new EventEmitter();
  @Output() show_trabajos_event=new EventEmitter();
  @Output() show_solicitudes_event=new EventEmitter();
  @Output() show_login_event=new EventEmitter();

  Solicitantes(){
    // tell the parent component (AppComponent)
      this.show_solicitantes_event.emit({
    });
  }
  Trabajos(){
    // tell the parent component (AppComponent)
      this.show_trabajos_event.emit({
    });
  }
  Solicitudes(){
    // tell the parent component (AppComponent)
      this.show_solicitudes_event.emit({
    });
  }
  Login(){
    // tell the parent component (AppComponent)
      this.show_login_event.emit({
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
