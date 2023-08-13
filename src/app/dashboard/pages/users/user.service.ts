import { Injectable } from '@angular/core';
import { CreateUserData, UpdateUserData, User } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const USER_DB: Observable<User[]> = of([
  {
    id: 1,
    name: 'Marcos',
    surname: 'campodonico',
    email: 'marcoscampodonico@outlook.com',
    linkedin:'marcoscamp',
    password: '123456',
    token:"dasda22"
  },
  {
    id: 2,
    name: 'luis',
    surname: 'campodonico',
    email: 'campodonicopef@mail.com',
    linkedin:'luiscamp',
    password: '123456',
    token:"dasda223"
  },
  {
    id: 3,
    name: 'johana',
    surname: 'campodonico',
    email: 'jmcamp@mail.com',
    linkedin:'johanacamp',
    password: '123456',
    token:"dasda2244"
  }
]).pipe(delay(1000));

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users$ = new BehaviorSubject<User[]>([]);
  private users$ = this._users$.asObservable();

  constructor(private notifier: NotifierService, private httpClient:HttpClient) {}

  loadUsers(): void {
    this.httpClient.get<User[]>(environment.baseApiUrl + '/users').subscribe({
      next:(Response) =>{
        console.log('RESPONSE', Response)
        this._users$.next(Response);
      }
    })
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }
  mostrarUsuario(id:number): Observable <User | undefined>{
    return this.users$.pipe(
      map((users) => users.find((u)=> u.id === id))
    )
  }

  createUser(user: CreateUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._users$.next([
          ...arrayActual,
          { ...user, id: arrayActual.length + 1 },
        ]);
        this.notifier.showSuccess('El usuario se ha creado con exito');
      },
    });
  }

  updateUserById(id: number, usuarioActualizado: UpdateUserData): void {
    // this.users$.pipe(take(1)).subscribe({
    //   next: (arrayActual) => {
    //     this._users$.next(
    //       arrayActual.map((u) =>
    //         u.id === id ? { ...u, ...usuarioActualizado } : u
    //       )
    //     );
    //     this.notifier.showSuccess('El usuario a sido modificado con exito');
    //   },
    // });
    this.httpClient.put(environment.baseApiUrl + '/users' + id, usuarioActualizado).subscribe({
      next: ()=>this.loadUsers(),
    })
  }

  deleteUserById(id: number): void {
    // this._users$.pipe(take(1)).subscribe({
    //   next: (arrayActual) => {
    //     this._users$.next(arrayActual.filter((u) => u.id !== id));
    //     this.notifier.showSuccess('el usuario ha sido eliminado');
    //   },
    // });
    this.httpClient.delete(environment.baseApiUrl +'/users/' + id).pipe(

    ).subscribe({
      next:(arrayActualizado) => this.loadUsers(),
    })
  }
}
