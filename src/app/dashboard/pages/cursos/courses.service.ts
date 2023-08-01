import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { course } from './models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses$ = new BehaviorSubject<course[]>([]);
  constructor() { }
  getcourses():Observable<course[]>{
    return this.courses$.asObservable(); //esto se hace para acceder al next, que este emite un valor

  }
  
  CargaDatos(): void {
    this.courses$.next([
      { 
        id:1,
        carrera:'Desarrollo Front-End',
        duracion:2,
        modalidad:'Remoto',
      },
      { 
        id:2,
        carrera:'Desarrollo Backend',
        duracion:1,
        modalidad:'Remoto',
      },
      { 
        id:3,
        carrera:'Data Engineering',
        duracion:2,
        modalidad:'Remoto',
      },
      { 
        id:4,
        carrera:'Data Scientist',
        duracion:1,
        modalidad:'Remoto',
      },
      { 
        id:5,
        carrera:'Desarrollo FullStack',
        duracion:2,
        modalidad:'Remoto',
      },
    ]);
  }
  //funcion para pushear datos al array de cursos
  //1° primero me suscribo para ver como es la situacion actual
  //
  //
  //
  addCourses():void{
    this.courses$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        arrayActual.push({
        id:arrayActual.length + 1,
        carrera: 'analista de sistemas',
        duracion:2,
        modalidad:'remoto',
        });
        this.courses$.next(arrayActual);
      }
    })


  }
}
