import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lista-estudiante',
  templateUrl: './lista-estudiante.component.html',
  styleUrls: ['./lista-estudiante.component.css']
})
export class ListaEstudianteComponent implements OnInit {

  estudiantes: any[]=[];

  constructor(
    private appService: AppService) {

  }

  ngOnInit(): void {

    this.appService.getAll()
    .subscribe((data:any) => this.estudiantes = data);

    console.log("paso");
    }


}
