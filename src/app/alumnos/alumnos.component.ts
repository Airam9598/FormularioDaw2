import { Component, OnInit } from '@angular/core';
import { Alumno ,AlumnoService} from 'src/app/alumno.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  formulario: Alumno;
  alumnosa: Alumno[];
  displayedColumns: string[] = ['name','age','decript','action'];
  dataSource =new MatTableDataSource(this.AlumnoServicea.getAll());
  Nameint="";
  Ageint="";
  desint="";
  idit="";
  constructor(private AlumnoServicea: AlumnoService) { 
    this.alumnosa=this.AlumnoServicea.getAll();
    this.dataSource = new MatTableDataSource(this.AlumnoServicea.getAll());
      this.formulario={} as Alumno;
    }
  
    ngOnInit(): void {
      this.getAllAlumnos();
    }
  
    getAllAlumnos(){
      this.alumnosa=this.AlumnoServicea.getAll();
      this.dataSource = new MatTableDataSource(this.AlumnoServicea.getAll());
    }
  
    clcikbu($event:any){
      $event.preventDefault();
      if(this.idit== ""){
        this.formulario={ id:this.alumnosa.length.toString(), Name: this.Nameint,Age:this.Ageint,Description:this.desint} as Alumno;
        this.Nameint="";
        this.Ageint="";
        this.desint="";
        this.idit="";
        this.AlumnoServicea.addAlumno(this.formulario);
      }else{
        this.AlumnoServicea.updateAlumno({ id:this.idit, Name: this.Nameint,Age:this.Ageint,Description:this.desint} as Alumno);
        this.Nameint="";
        this.Ageint="";
        this.desint="";
        this.idit="";
      }
        this.getAllAlumnos();
    }
  
     eliminarAlumno(id: string){
      this.AlumnoServicea.deleteAlumno(id);
      this.alumnosa=this.AlumnoServicea.getAll();
      this.dataSource = new MatTableDataSource(this.AlumnoServicea.getAll());
    }

    editAlumno(id: Alumno){
      this.Nameint=id.Name;
        this.Ageint=id.Age;
        this.desint=id.Description;
        this.idit=id.id;
    }


}
