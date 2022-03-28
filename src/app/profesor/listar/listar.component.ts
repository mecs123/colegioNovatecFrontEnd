import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  profesores: any[]=[];

  constructor(private appService: AppService) { }


  ngOnInit(): void {
    this.appService.getAllProfesor()
    .subscribe((data:any) => this.profesores = data);

    console.log("paso");
    }
}
