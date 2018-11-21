import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show_login_html=false;
  show_header_html=false;
  show_solicitantes_html=true;
  show_trabajos_html=false;
  show_solicitudes_html=false;

  hideAll_Html(){
    this.show_login_html=false;
    this.show_header_html=false;
    this.show_solicitantes_html=false;
    this.show_trabajos_html=false;
    this.show_solicitudes_html=false;
  }

  showLogin($event){
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_login_html=true;
  }

  showSolicitantes($event){
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_header_html=true;
    this.show_solicitantes_html=true;
  }
  showTrabajos($event){
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_header_html=true;
    this.show_trabajos_html=true;
  }
  showSolicitudes($event){
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_header_html=true;
    this.show_solicitudes_html=true;
  }
}
