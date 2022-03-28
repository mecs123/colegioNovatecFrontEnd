import { Profesor } from './../../models/profesor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  profesor:Profesor = new Profesor();

  constructor(
    private appService: AppService,
    private router: Router) {

  }

  ngOnInit(): void {

    }

    create():void{

      this.appService.createProfesor(this.profesor).subscribe(
        result => {
          this.router.navigate(['/profesor/form'])
        }
      )
      console.log(this.profesor)
    }


}
