import { Component, OnInit } from '@angular/core';
import { PeticionService } from 'src/app/servicios/peticion.service';


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.css']
})
export class MiperfilComponent implements OnInit {

  constructor(public peticion:PeticionService) { }

  ngOnInit(): void {
  }

  prueba(){
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/prueba',
      data:{}
    }
    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any) =>{
        console.log(res)

        
    })

  }

}
