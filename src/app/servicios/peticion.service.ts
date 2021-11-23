import { HttpClient, HttpRequest,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from './usuario.service';


@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  constructor(public http:HttpClient, public route:Router, private usuarioservice:UsuarioService) { }

  public Post(url:string,data:{}){

    let promise = new Promise((resolve,reject) =>{

      this.http.post(url,data)
      .toPromise()
      .then(
        (res:any) => {
          resolve(res);

          if(res.redireccionarallogin != null && res.redireccionarallogin == true){
            this.usuarioservice.rol = '';
            this.usuarioservice.nombreusuario = 'anonimo'
            //this.route.navigate(['/login'])
          }
        }
      )
    })
    return promise
  }

  public Get(url:string){

    let promise = new Promise((resolve,reject) =>{

      this.http.get(url)
      .toPromise()
      .then(
        (res:any) => {
          resolve(res)
        }
      )

    })
    return promise
  }

  public urlLocal:string = 'http://localhost:3002'

}





