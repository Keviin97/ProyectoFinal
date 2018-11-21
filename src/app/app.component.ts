import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
