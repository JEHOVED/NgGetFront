import { Component } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  constructor(private servicio: UsuariosService){};

  Nombres: string = '';
  Apellidos: string = '';
  Direccion: string = '';
  Edad: number = 0;
  Correo: string = '';


  public data: any [] = [];
  public listadoUsuarios : any[] = [];

  ngOnInit():void{
    this.cargarTodosUsuarios();
  }

  cargarTodosUsuarios(){
    this.servicio.getTodosUsuarios().subscribe(data=>{
      this.listadoUsuarios = data;
      console.log("usuarios cargados", this.data);
    })
  }

  agregarUsuario(){
    console.log("agregar usuario");
    console.log("agregar usuario", this.Nombres);
    console.log("agregar usuario", this.Apellidos);
    console.log("agregar usuario", this.Direccion);
    console.log("agregar usuario", this.Edad);
    console.log("agregar usuario", this.Correo);
    console.log("agregar usuario");

  }


}
