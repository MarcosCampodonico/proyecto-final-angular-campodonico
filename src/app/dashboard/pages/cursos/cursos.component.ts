import { Component, OnInit } from '@angular/core';
import { course } from './models';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public dataSource: course[]  = [];
  public displayedColumns = ['id','carrera','duracion','modalidad'];
  public data$: Observable<course[]>;
  constructor (private coursesService: CoursesService){
    this.data$ = this.coursesService.getcourses();
  }
  ngOnInit(): void {
    //CArgar datos
    this.coursesService.CargaDatos();
    //obtengo cursos
    this.coursesService.getcourses().subscribe({
      next: (data) => console.log('data:', data),

    })
    //subscribe escucha y next emite valor
  }
  create ():void{
    this.coursesService.addCourses();
  }


}
