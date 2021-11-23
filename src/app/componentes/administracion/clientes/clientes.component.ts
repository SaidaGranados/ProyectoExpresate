import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';
import { PeticionService } from 'src/app/servicios/peticion.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private  peticion:PeticionService, public mensaje:MensajeriaService) { }

  ngOnInit(): void {
    this.cargarTodos()
  }

  Id:string ='';
  listaclientes:any = [];
  nombrecompleto:string = '';
  email:string = '';
  password:string = '';
  confirm:string = '';
  estado:string = '0';
  codigoactivacion:string = '';
  rol_id:number = 0;
  modoeditar:boolean = false;



  cargarTodos(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/listartodos',
      data:{}
    }



    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any) =>{
        console.log(res)
        this.listaclientes = res.data
    })
  }

  Nuevo(){
    this.Id = '';
    this.modoeditar = false;
    this.nombrecompleto = '';
    this.email = '';
    this.password = '';
    this.confirm = '';
    this.estado = '0';
    this.codigoactivacion = '';
    this.rol_id = 0
  }

  Guardar(){

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/registrar',
      data:{
        nombrecompleto:this.nombrecompleto,
        email:this.email,
        password:this.password,
        confirm:this.confirm
      }
    }
    console.log(post + 'post')

    this.peticion.Post(post.host + post.path,post.data).then((res:any)=>{
      console.log(res)   
      this.mensaje.load(res.mensaje)  
      this.cargarTodos()
    })
  }


  Editar(id:string){
    this.Id = id;
    this.modoeditar = true;
    console.log(id)
    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/listarId',
      data:{
        id:id
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any) => {
        console.log(res)
        this.nombrecompleto = res.data[0].nombrecompleto
        this.email = res.data[0].email
        this.estado = res.data[0].estado
        this.codigoactivacion = res.data[0].codigoactivacion
        this.rol_id = res.data[0].rol_id
    })

  }

  Actualizar(){
    console.log(this.Id)

    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/actualizar',
      data:{
        nombrecompleto:this.nombrecompleto,
        estado:this.estado,
        codigoactivacion:this.codigoactivacion,
        rol_id:this.rol_id,
        id:this.Id,
        /*email:localStorage.getItem('email')*/
        email:this.email
      }
    }
    console.log(post)

    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any)=>{
        console.log(res)
        this.mensaje.load(res.mensaje)
        this.cargarTodos()
        
    })




  }

  Eliminar(id:string){
    console.log(id)


    var post = {
      host:this.peticion.urlLocal,
      path:'/usuarios/eliminar',
      data:{
        id:id
      }
    }

    this.peticion.Post(post.host + post.path,post.data).then(
      (res:any)=>{
        this.mensaje.load(res.mensaje)
        console.log(res.mensaje)
        this.cargarTodos()
    })

  }

  
}