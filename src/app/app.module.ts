import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaEstudianteComponent } from './estudiante/lista-estudiante.component';
import { CreaEstudianteComponent } from './estudiante/crea-estudiante.component';

//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Services
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './profesor/create/create.component';
import { ListarComponent } from './profesor/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaEstudianteComponent,
    CreaEstudianteComponent,
    CreateComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
