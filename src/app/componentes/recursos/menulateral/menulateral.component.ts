import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-menulateral',
  templateUrl: './menulateral.component.html',
  styleUrls: ['./menulateral.component.css']
})
export class MenulateralComponent implements OnInit {

  constructor(public usuarioservicio:UsuarioService) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.usuarioservicio.estadoLogueado = false    
  }

}
