export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  linkedin:string
  password: string;
  token: string;
}

export interface CreateUserData {
  name: string;
  surname: string;
  email: string;
  linkedin: string,
  password: string;
  token: string;
}

export interface UpdateUserData {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
  linkedin?: string,
  token: string;
}
