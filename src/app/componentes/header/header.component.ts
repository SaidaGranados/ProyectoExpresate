import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargarcarritoService } from 'src/app/servicios/cargarcarrito.service';
import { ListaplantasService } from 'src/app/servicios/listaplantas.service';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public usuarioservice:UsuarioService,public peticion:PeticionService, public msg:MensajeriaService,public route:Router, public carrito:CargarcarritoService , public lista:ListaplantasService) { }

  

  ngOnInit(): void {
   
    this.status()
    this.carrito.cargarcarrito()

  }


  cerrarSesion(){
    /*this.usuarioservice.estadoLogueado = false
    localStorage.setItem('estadosesion','Error')*/

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/cerrarsesion',
      data:{}
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any)=>{
      console.log(res)
      this.msg.load(res.mensaje)
      this.usuarioservice.nombreusuario = 'anonimo'
      this.route.navigate(['/'])
      this.usuarioservice.rol = res.rol_id
      
      
    })

    

  }


  status(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/status',
      data: {}
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any)=>{
      console.log(res)
      this.usuarioservice.nombreusuario = res.nombreusuario
      this.usuarioservice.rol = res.rol_id
      
    })



  }

  


  

 
  



}
