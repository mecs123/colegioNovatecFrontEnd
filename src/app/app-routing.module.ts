import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaEstudianteComponent } from './estudiante/crea-estudiante.component';
import { ListaEstudianteComponent } from './estudiante/lista-estudiante.component';
import { CreateComponent } from './profesor/create/create.component';
import { ListarComponent } from './profesor/listar/listar.component';

const routes: Routes = [
  {
    path: '',component:ListaEstudianteComponent
  },
  {
    path: 'estudiante/form',component:CreaEstudianteComponent
  },
  {
    path: 'profesor/create',component:CreateComponent
  },
  {
    path: 'profesor/form',component:ListarComponent
  },
  {
    path: '**',redirectTo:'',pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
