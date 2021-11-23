import { Component, OnInit } from '@angular/core';
import { ListaplantasService } from 'src/app/servicios/listaplantas.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(public lista:ListaplantasService ) { }

  ngOnInit(): void {
  }







}
