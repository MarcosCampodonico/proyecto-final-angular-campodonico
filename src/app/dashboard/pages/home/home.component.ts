import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['legajo', 'nombre', 'apellido', 'posicion','catedra'];

  // Datos de ejemplo para la tabla
  dataSource = new MatTableDataSource([
    { legajo: 231, nombre: 'Salomon', apellido: 'perez', posicion: 'Profesor adjunto',catedra: 'Desarrollo Web' },
    { legajo: 232, nombre: 'Miguel', apellido: 'lopez', posicion: 'Jefe de trabajos practicos',catedra: 'JavaScript' },
    { legajo: 233, nombre: 'Lucas', apellido: 'reyes', posicion: 'Ayudante de 1era',catedra: 'Vue.js' },
    
  ]);
 
}


  

