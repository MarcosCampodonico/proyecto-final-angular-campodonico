import { Injectable } from '@angular/core';
import { CreateUserData, UpdateUserData, User } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';

const USER_DB: Observable<User[]> = of([
  {
    id: 1,
    name: 'Marcos',
    surname: 'campodonico',
    email: 'marcoscampodonico@outlook.com',
    linkedin:'marcoscamp',
    password: '123456',
  },
  {
    id: 2,
    name: 'luis',
    surname: 'campodonico',
    email: 'campodonicopef@mail.com',
    linkedin:'luiscamp',
    password: '123456',
  },
  {
    id: 3,
    name: 'johana',
    surname: 'campodonico',
    email: 'jmcamp@mail.com',
    linkedin:'johanacamp',
    password: '123456',
  }
]).pipe(delay(1000));

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users$ = new BehaviorSubject<User[]>([]);
  private users$ = this._users$.asObservable();

  constructor(private notifier: NotifierService) {}

  loadUsers(): void {
    USER_DB.subscribe({
      next: (usuariosFromDb) => this._users$.next(usuariosFromDb),
    });
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
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._users$.next(
          arrayActual.map((u) =>
            u.id === id ? { ...u, ...usuarioActualizado } : u
          )
        );
        this.notifier.showSuccess('El usuario a sido modificado con exito');
      },
    });
  }

  deleteUserById(id: number): void {
    this._users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this._users$.next(arrayActual.filter((u) => u.id !== id));
        this.notifier.showSuccess('el usuario ha sido eliminado');
      },
    });
  }
}
