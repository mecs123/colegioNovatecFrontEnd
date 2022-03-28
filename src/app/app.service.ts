import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_BASE_ESTUDIANTE = 'http://localhost:8080/estudiante'
const API_BASE_PROFESOR =   'http://localhost:8080/profesor'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }


  getAll(){
    return this.http.get(`${API_BASE_ESTUDIANTE}/listar`)
  }

  create(estudiante:any) {
    return this.http.post(`${API_BASE_ESTUDIANTE}`,estudiante);
  }
  // Profesor
  getAllProfesor(){
    return this.http.get(`${API_BASE_PROFESOR}/listar`)
  }

  createProfesor(profesor:any) {
    return this.http.post(`${API_BASE_PROFESOR}`,profesor);
  }

}
