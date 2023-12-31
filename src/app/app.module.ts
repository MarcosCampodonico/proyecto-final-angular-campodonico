import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './dashboard/dashboard.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import eslocale from '@angular/common/locales/es-AR'
import { registerLocaleData } from '@angular/common';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './dashboard/pages/cursos/cursos.module';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
registerLocaleData(eslocale);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule, 
    AuthModule, 
    MatCardModule,
    CursosModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-AR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
