import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-trabajaconnosotros',
  templateUrl: './trabajaconnosotros.component.html',
  styleUrls: ['./trabajaconnosotros.component.css']
})
export class TrabajaconnosotrosComponent implements OnInit {

  constructor(private peticion: PeticionService, public mensaje:MensajeriaService, private route:Router) { }

  ngOnInit(): void {
  }

  registro: any = {

    nombrecompleto:"",
    telefono:"",
    direccion:"",
    email:""
  }

  registrarVendedor(datos:any):boolean{// Aquí recibo los elementos del objeto registro
    console.log(datos)

    if(datos.nombrecompleto == '' || datos.nombrecompleto == null || datos.nombrecompleto == undefined ){
      this.mensaje.load('El nombre completo es un campo obligatorio')
      return false;
    }

    if(datos.telefono == '' || datos.telefono == null || datos.telefono == undefined ){
      this.mensaje.load('El telefono completo es un campo obligatorio')
      return false;
    }

    if(datos.direccion == '' || datos.direccion == null || datos.direccion == undefined ){
      this.mensaje.load('El direccion completo es un campo obligatorio')
      return false;
    }

    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if(datos.email == '' || datos.email == undefined || datos.email == null){
      this.mensaje.load('El email es un campo obligatorio')
        return false;
    }else if(! emailRegex.test(datos.email)){            
      this.mensaje.load('Correo no valido') 
            return false;
        }
    
    var post = {
      host:this.peticion.urlLocal,
      path:'/vendedores/registrar',
      data:{
          nombrecompleto:datos.nombrecompleto,
          telefono:datos.telefono,
          direccion:datos.direccion,
          email:datos.email,
          
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











