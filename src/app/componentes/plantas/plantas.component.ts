import { Component, Input, OnInit } from '@angular/core';
import { CargarcarritoService } from 'src/app/servicios/cargarcarrito.service';
import { ListaplantasService } from 'src/app/servicios/listaplantas.service';





@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  constructor(public carrito:CargarcarritoService, public lista:ListaplantasService) { }

  @Input() datosentradaplantas: any [] = []

  ngOnInit(): void {
  }

 
  
  

  Agregar(item:any){
    console.log(item)
    this.carrito.agregaritem(item)
  }

}
