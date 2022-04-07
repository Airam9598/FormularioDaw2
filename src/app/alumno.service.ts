import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  Alumnolist: Alumno[]= [{id:"0",Name:"Pepe",Description:"aldhs",Age:"23"}];
  constructor() { }
  getAll(){
    return this.Alumnolist;
  }

  addAlumno(payload: Alumno){
    return this.Alumnolist.push(Object.assign(payload));
  }
  updateAlumno(payload: Alumno){
    this.Alumnolist[Object.assign(payload).id].Description=Object.assign(payload).Description;
    this.Alumnolist[Object.assign(payload).id].Age=Object.assign(payload).Age;
    this.Alumnolist[Object.assign(payload).id].Name=Object.assign(payload).Name;
  }

  deleteAlumno(id: string){
   return this.Alumnolist.splice(parseInt(id), 1);
  }
}


export interface Alumno{
  id: string;
  Name: string;
  Description: string;
  Age: string;
}