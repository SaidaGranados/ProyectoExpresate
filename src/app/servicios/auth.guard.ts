import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PeticionService } from './peticion.service';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private usuarioservice:UsuarioService,private peticion:PeticionService,private route:Router){}

  status(callback:any){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/status',
      data: {}
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any)=>{
      console.log(res)
      this.usuarioservice.nombreusuario = res.nombreusuario
      this.usuarioservice.rol = res.rol_id

      if(this.usuarioservice.rol == '1' && this.usuarioservice.rol != null){
        return callback(true);
      }
      else{
        return callback(false);
      }    

      
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      
      return new Promise((resolve,rejects)=>{

        var post = {
          host:this.peticion.urlLocal,
          path:'/usuarios/status',
          data:{}
        }

        this.peticion.Post(post.host + post.path,post.data).then((res:any)=>{
          this.usuarioservice.nombreusuario = res.nombreusuario
          this.usuarioservice.rol = res.rol_id

          if(this.usuarioservice.rol == '1' && this.usuarioservice.rol != null){
            resolve(true) ;
          }
          else{
            this.route.navigate(['/home'])
            rejects(false);
          }


        })



      })
      
    
     
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      console.log(this.usuarioservice.rol)
      if(this.usuarioservice.rol == '1' && this.usuarioservice.rol != null){
        return true;
      }
      else{
        return false;
      }
  }
}
