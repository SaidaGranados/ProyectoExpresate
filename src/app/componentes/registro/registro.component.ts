import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private peticion: PeticionService, public mensaje:MensajeriaService, private route:Router) { }

  ngOnInit(): void {
  }

  registro: any = {

    nombrecompleto:"",
    email:"",
    password:"",
    confirm:""
  }

  registrarUsuario(datos:any):boolean{// Aquí recibo los elementos del objeto registro
    console.log(datos)

    if(datos.nombrecompleto == '' || datos.nombrecompleto == null || datos.nombrecompleto == undefined ){
      this.mensaje.load('El nombre completo es un campo obligatorio')
      return false;
    }

    /*if(datos.email == '' || datos.email == null || datos.email == undefined ){
      this.mensaje.load('El email es un campo obligatorio')
      return false;
    }*/


    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(datos.email == '' || datos.email == undefined || datos.email == null){
      this.mensaje.load('El email es un campo obligatorio')
        return false;
    }else if(! emailRegex.test(datos.email)){            
      this.mensaje.load('Correo no valido') 
            return false;
        }

    if(datos.password == '' || datos.password == null || datos.password == undefined ){
      this.mensaje.load('La contraseña es un campo obligatorio')
      return false;
    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(passwordRegex.test(datos.password) == false){
      this.mensaje.load('Password inseguro')
      return false;
    }

    if(datos.confirm == '' || datos.confirm == null || datos.confirm == undefined ){
      this.mensaje.load('La confirmación de la contraseña es un campo obligatorio')
      return false;
    }

    if(datos.password != datos.confirm){
      this.mensaje.load('La contraseña ingresada no coincide con la confirmación')
      return false;
    }

    

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/registrar',
      data:{
          nombrecompleto:datos.nombrecompleto,
          email:datos.email,
          password:datos.password,
          confirm:datos.confirm
      }
    }
    

    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any) => {
        console.log(res)     
        this.mensaje.load(res.mensaje)
        if(res.state == true){
          this.route.navigate(['/login'])
        }
      })

      return true;

  }

}
