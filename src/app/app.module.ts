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
