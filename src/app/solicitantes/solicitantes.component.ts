import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitantes',
  templateUrl: './solicitantes.component.html',
  styleUrls: ['./solicitantes.component.css']
})
export class SolicitantesComponent {

  // properties for child components
  title="Listado de solicitantes";
  id_Solicitante;

  // properties used to identify what views to show
  show_read_solicitante_html=true;
  show_create_solicitante_html=false;
  show_read_one_solicitante_html=false;
  show_update_solicitante_html=false;
  show_delete_solicitante_html=false;

  // show the 'create product form'
  showCreateSolicitante($event){
  
    // set title
    this.title=$event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_create_solicitante_html=true;
  }

  // show products list
  showReadSolicitantes($event){
    // set title
    this.title=$event.title;

    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_solicitante_html=true;
  }

  // hide all html views
  hideAll_Html(){
    this.show_read_solicitante_html=false;
    this.show_create_solicitante_html=false;
    this.show_read_one_solicitante_html=false;
    this.show_update_solicitante_html=false;
    this.show_delete_solicitante_html=false;
  }
  showReadOneSolicitante($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Solicitante=$event.id_Solicitante;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_read_one_solicitante_html=true;
  }
  showUpdateSolicitante($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Solicitante=$event.id_Solicitante;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_update_solicitante_html=true;
  }
  showDeleteSolicitante($event){
 
    // set title and product ID
    this.title=$event.title;
    this.id_Solicitante=$event.id_Solicitante;
 
    // hide all html then show only one html
    this.hideAll_Html();
    this.show_delete_solicitante_html=true;
  }

}
