import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent{

  title="Listado de trabajos";
  id_Trabajo;

  // properties used to identify what views to show
  show_read_trabajo_html=true;
  show_create_trabajo_html=false;
  show_read_one_trabajo_html=false;
  show_update_trabajo_html=false;
  show_delete_trabajo_html=false;

  // show the 'create product form'
  showCreateTrabajo($event){
  
    // set title
    this.title=$event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_trabajo_html=true;
  }

  // show products list
  showReadTrabajos($event){
    // set title
    this.title=$event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_trabajo_html=true;
  }

  // hide all html views
  hideAll_Html(){
    this.show_read_trabajo_html=false;
    this.show_create_trabajo_html=false;
    this.show_read_one_trabajo_html=false;
    this.show_update_trabajo_html=false;
    this.show_delete_trabajo_html=false;
  }
  showReadOneTrabajo($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Trabajo=$event.id_Trabajo;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_trabajo_html=true;
  }
  showUpdateTrabajo($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Trabajo=$event.id_Trabajo;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_update_trabajo_html=true;
  }
  showDeleteTrabajo($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Trabajo=$event.id_Trabajo;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_trabajo_html=true;
  }

}
