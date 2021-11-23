import { Component, OnInit } from '@angular/core';
import { ListaplantasService } from 'src/app/servicios/listaplantas.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public lista:ListaplantasService) { }

  ngOnInit(): void {
  }

}
