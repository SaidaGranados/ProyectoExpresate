import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  public estadoLogueado:boolean = false;
  public rol_actual:string = '1';
  public nombreusuario:string = 'anonimo'
  public rol:string = ''

  
}
