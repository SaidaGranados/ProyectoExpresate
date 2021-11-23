import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public usuarioservicio:UsuarioService, private peticion:PeticionService, public mensaje:MensajeriaService, public route: Router) { }

  ngOnInit(): void {
  }


  login: any = {    
    email:"",
    password:"",    
  }

  /*email:string = '';
  password:string = '';*/


  iniciarSesion(datos:any):boolean{
    /*console.log(this.email)
    console.log(this.password)*/


    if(datos.email == '' || datos.email == null || datos.email == undefined ){
      this.mensaje.load('El email es un campo obligatorio')
      return false;
    }


    if(datos.password == '' || datos.password == null || datos.password == undefined ){
      this.mensaje.load('La contraseña es un campo obligatorio')
      return false;
    }

    
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/login',
      data:{
        email:datos.email,
        password:datos.password
      }

    }

    console.log(post)

    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any) => {

        console.log(res)

        if(res.data != null && res.data != undefined){

          if(res.data.length == 1){
            console.log(res)
            this.mensaje.load('Bienvenido(a) ' + res.data[0].nombrecompleto)

            this.usuarioservicio.nombreusuario = res.data[0].nombrecompleto

            this.usuarioservicio.rol = res.data[0].rol_id

            this.usuarioservicio.estadoLogueado = true
/*             localStorage.setItem('estadosesion','ok')
            localStorage.setItem('nombre',res.data[0].nombrecompleto)
            localStorage.setItem('email',res.data[0].email)
            localStorage.setItem('rol_id',res.data[0].rol_id) */
            this.usuarioservicio.rol_actual = res.data[0].rol_id         
            this.route.navigate(['cliente/miperfil'])            
            
          }
          else{
              this.mensaje.load('Error al iniciar sesion')
              localStorage.setItem('estadosesion','Error')
          }

        } 


    })
    return true;
    
  }

}
