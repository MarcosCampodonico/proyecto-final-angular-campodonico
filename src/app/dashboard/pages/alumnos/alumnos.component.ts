import { Component } from '@angular/core';
import { alumno } from './models';
import { Observable } from 'rxjs';
import { AlumnosService } from './alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent {
  public dataSource: alumno[]  = [];
  public displayedColumns = ['legajo','nombre','apellido','curso'];
  public referencia$: Observable <alumno[]>;
  constructor(private alumnosService: AlumnosService){
    this.referencia$ = this.alumnosService.getAlumnos();
  }
  ngOnInit():void{
    this.alumnosService.cargarAlumnos();
    this.alumnosService.getAlumnos().subscribe({
      next:(data) => console.log('data', data),
    })
  }
  create():void{
    this.alumnosService.añadirAlumno();
  }
}
