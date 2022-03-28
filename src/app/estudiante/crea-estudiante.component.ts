import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Estudiante } from '../models/estudiante';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crea-estudiante',
  templateUrl: './crea-estudiante.component.html',
  styleUrls: ['./crea-estudiante.component.css']
})
export class CreaEstudianteComponent implements OnInit {

  estudiante:Estudiante = new Estudiante();


  constructor(
    private appService: AppService,
    private router: Router
    ) {

  }

  ngOnInit(): void {

  }

  create():void{

    this.appService.create(this.estudiante).subscribe(
      result => {
        this.router.navigate(['/'])
      }
    )
    console.log(this.estudiante)
  }





  }
