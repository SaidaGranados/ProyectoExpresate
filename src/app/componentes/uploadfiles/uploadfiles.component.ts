import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubirarchivosService } from 'src/app/servicios/subirarchivos.service';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {

  constructor(public uploadService:SubirarchivosService) { }

  selectedfiles:any
  booseleccionado = true;
  archivoseleccionado:any;
  progress = 0;
  mensaje: string = '';
  

  ngOnInit(): void {
  }

  seleccionararchivo(event:any){
    console.log(event)
    this.selectedfiles = event.target.files
    this.booseleccionado = false
  }

  upload(){
    this.progress = 0;
    this.archivoseleccionado = this.selectedfiles.item(0);
    console.log(this.archivoseleccionado)

    this.uploadService.upload(this.archivoseleccionado).subscribe(
      (event:any) =>{
        console.log(event)

        if(event.type === HttpEventType.UploadProgress){
          this.progress = Math.round(100 * event.loaded / event.total)
        }
        else{
          if(event instanceof HttpResponse){
            this.mensaje = event.body.message;
          }
        }

      },
      err => {
        this.progress = 0;
        this.mensaje = 'Se presentó un error al cargar'
        this.archivoseleccionado = undefined
      }
    )
  }




}



