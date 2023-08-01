import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { alumno } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  private alumno$ = new BehaviorSubject <alumno[]>([]);
  constructor() { }

  getAlumnos():Observable<alumno[]>{
    return this.alumno$.asObservable();
  }

  cargarAlumnos():void{
    this.alumno$.next([
      {
        legajo: 1000,
        nombre: 'Sergio',
        apellido: 'Roque perez',
        curso: 'HTML & CSS',
      },
      {
        legajo: 1001,
        nombre: 'Pedro',
        apellido: 'Davis',
        curso: 'SQL',
      },
      {
        legajo: 1002,
        nombre: 'Matias',
        apellido: 'Estevez',
        curso: 'Figma',
      },
      {
        legajo: 1003,
        nombre: 'Juan',
        apellido: 'Ranit',
        curso: 'React',
      },
      {
        legajo: 1004,
        nombre: 'Roman',
        apellido: 'Gonzales',
        curso: 'JavaScript',
      },
    ]);
  }
  añadirAlumno():void{
    this.alumno$.pipe(take(1)).subscribe({
      next: (actual) =>{
        actual.push({
        legajo: actual.length + 1,
        nombre: 'Fernando',
        apellido: 'Estigarribia',
        curso: 'Python',
        });
        this.alumno$.next(actual)
      }
    })
  }
}
