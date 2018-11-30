import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent{

  // properties for child components
  title="Listado de solicitudes";
  id_Solicitud;

  // properties used to identify what views to show
  show_read_solicitud_html=true;
  show_create_solicitud_html=false;
  show_read_one_solicitud_html=false;  
  show_delete_solicitud_html=false;

  // show the 'create product form'
  showCreateSolicitud($event){
  
    // set title
    this.title=$event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_solicitud_html=true;
  }

  // show products list
  showReadSolicitudes($event){
    // set title
    this.title=$event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_solicitud_html=true;
  }

  // hide all html views
  hideAll_Html(){
    this.show_read_solicitud_html=false;
    this.show_create_solicitud_html=false;
    this.show_read_one_solicitud_html=false;
    this.show_delete_solicitud_html=false;
  }
  showReadOneSolicitud($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Solicitud=$event.id_Solicitud;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_solicitud_html=true;
  }
  showDeleteSolicitud($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Solicitud=$event.id_Solicitud;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_solicitud_html=true;
  }

}
