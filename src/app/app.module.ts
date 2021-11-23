import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TrabajaconnosotrosComponent } from './componentes/trabajaconnosotros/trabajaconnosotros.component';
import { P404Component } from './componentes/p404/p404.component';
import { FormsModule } from '@angular/forms';
import { MensajeriaComponent } from './componentes/mensajeria/mensajeria.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { LoginComponent } from './componentes/login/login.component';
import { ActivarcuentaComponent } from './componentes/activarcuenta/activarcuenta.component';
import { MiperfilComponent } from './componentes/cliente/miperfil/miperfil.component';
import { ContrasenaComponent } from './componentes/cliente/contrasena/contrasena.component';
import { ClientesComponent } from './componentes/administracion/clientes/clientes.component';
import { MenulateralComponent } from './componentes/recursos/menulateral/menulateral.component';
import { UploadfilesComponent } from './componentes/uploadfiles/uploadfiles.component';
import { CookieService } from 'ngx-cookie-service';
import { InterceptorService } from './interceptores/interceptor.service';
/*import { CommonModule } from '@angular/common';*/
import { PlantasComponent } from './componentes/plantas/plantas.component';
import { VendedoresComponent } from './componentes/administracion/vendedores/vendedores.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { PadreComponent } from './componentes/padre/padre.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TrabajaconnosotrosComponent,
    P404Component,
    MensajeriaComponent,
    RegistroComponent,
    LoginComponent,
    ActivarcuentaComponent,
    MiperfilComponent,
    ContrasenaComponent,
    ClientesComponent,
    MenulateralComponent,
    UploadfilesComponent,
    PlantasComponent,
    VendedoresComponent,
    NosotrosComponent,
    PadreComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  
    
  ],
  providers: [CookieService,{
    provide: HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
