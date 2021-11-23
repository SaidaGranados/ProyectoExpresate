import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarcarritoService {
  constructor() { }

  public data: any[] = []

  public contador: Number = 0

  public agregaritem(item:any){
    let tmp = localStorage.getItem("data")
    console.log(tmp)
    if(tmp == null){
      localStorage.setItem("data","[]")
    }
    this.data.push(item)
    localStorage.setItem("data",JSON.stringify(this.data))
    this.contador = this.data.length
  }

  public cargarcarrito(){
    let tmp:any = localStorage.getItem("data")
    if(tmp == null){
      localStorage.setItem("data","[]")
      tmp = "[]"
    }


    this.data = JSON.parse(tmp)
    this.contador = this.data.length
  }
 
}
