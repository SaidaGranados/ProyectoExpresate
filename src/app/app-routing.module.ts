import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivarcuentaComponent } from './componentes/activarcuenta/activarcuenta.component';
import { ClientesComponent } from './componentes/administracion/clientes/clientes.component';
import { VendedoresComponent } from './componentes/administracion/vendedores/vendedores.component';
import { ContrasenaComponent } from './componentes/cliente/contrasena/contrasena.component';
import { MiperfilComponent } from './componentes/cliente/miperfil/miperfil.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { P404Component } from './componentes/p404/p404.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { PlantasComponent } from './componentes/plantas/plantas.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TrabajaconnosotrosComponent } from './componentes/trabajaconnosotros/trabajaconnosotros.component';
import { UploadfilesComponent } from './componentes/uploadfiles/uploadfiles.component';

import { AuthGuard } from './servicios/auth.guard';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'padre',component:PadreComponent},
  {path:'trabajaconnosotros',component:TrabajaconnosotrosComponent},
  {path:'plantas',component:PlantasComponent},
  {path:'activarcuenta',component:ActivarcuentaComponent},
  {path:'registro',component:RegistroComponent},
  {path:'login',component:LoginComponent},
  {path:'cliente/contrasena',component:ContrasenaComponent},
  {path:'cliente/miperfil',component:MiperfilComponent},
  {path:'administracion/clientes',component:ClientesComponent,canActivate:[AuthGuard],canLoad:[AuthGuard]},
  {path:'administracion/vendedores',component:VendedoresComponent,canActivate:[AuthGuard],canLoad:[AuthGuard]},
  {path:'nosotros',component:NosotrosComponent},


  
  {path:'upload',component:UploadfilesComponent},       
  {path:'**',component:P404Component,pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
