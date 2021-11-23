import { Component, OnInit } from '@angular/core';
import { MensajeriaService } from 'src/app/servicios/mensajeria.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  constructor(public dialog:MensajeriaService) { }

  ngOnInit(): void {
  }

}
