import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.component.html',
  styleUrls: ['./contrasena.component.css']
})
export class ContrasenaComponent implements OnInit {

  constructor(private peticion:PeticionService, public mensaje:MensajeriaService) { }

  ngOnInit(): void {
  }

  password:string = '';
  confirm:string = '';

  cambiarPassword(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/cambiarcontrasena',
      data:{
        password:this.password,
        confirm:this.confirm
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then((res:any) =>{
      console.log(res)
      this.mensaje.load(res.mensaje)
    })
  }

}
