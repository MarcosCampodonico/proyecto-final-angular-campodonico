import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [AlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    
  ]
})
export class AlumnosModule { }
