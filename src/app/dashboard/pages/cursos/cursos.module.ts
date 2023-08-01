import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosRoutingModule } from './cursos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CursosComponent } from './cursos.component';




@NgModule({
  declarations: [CursosComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    MatTableModule,
  ]
})
export class CursosModule { }
