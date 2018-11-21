import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateSolicitanteComponent } from './solicitante/create-solicitante/create-solicitante.component';
import { ReadSolicitanteComponent } from './solicitante/read-solicitante/read-solicitante.component';
import { ReadOneSolicitanteComponent } from './solicitante/read-one-solicitante/read-one-solicitante.component';
import { UpdateSolicitanteComponent } from './solicitante/update-solicitante/update-solicitante.component';
import { DeleteSolicitanteComponent } from './solicitante/delete-solicitante/delete-solicitante.component';
import { CreateTrabajoComponent } from './trabajo/create-trabajo/create-trabajo.component';
import { ReadTrabajoComponent } from './trabajo/read-trabajo/read-trabajo.component';
import { ReadOneTrabajoComponent } from './trabajo/read-one-trabajo/read-one-trabajo.component';
import { UpdateTrabajoComponent } from './trabajo/update-trabajo/update-trabajo.component';
import { DeleteTrabajoComponent } from './trabajo/delete-trabajo/delete-trabajo.component';
import { SolicitantesComponent } from './solicitantes/solicitantes.component';
import { TrabajosComponent } from './trabajos/trabajos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NavBarComponent,
    CreateSolicitanteComponent,
    ReadSolicitanteComponent,
    ReadOneSolicitanteComponent,
    UpdateSolicitanteComponent,
    DeleteSolicitanteComponent,
    CreateTrabajoComponent,
    ReadTrabajoComponent,
    ReadOneTrabajoComponent,
    UpdateTrabajoComponent,
    DeleteTrabajoComponent,
    SolicitantesComponent,
    TrabajosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
