import { HttpClient,HttpRequest,HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirarchivosService {

  constructor(private http:HttpClient) { }


  upload(file:File): Observable<HttpEvent<any>>{

    const formData: FormData = new FormData();
    formData.append('userfile',file)
    
    const peticion = new HttpRequest('Post','http://127.0.0.1:3002/anexos/subirimagen/saidaGranados/pdf',formData,{
      reportProgress:true,
      responseType:'json'
    })
    return this.http.request(peticion)

  }
  
}
