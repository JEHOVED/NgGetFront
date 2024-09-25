import { Component } from '@angular/core';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  constructor(private servicio: UsuariosService){};

  data: any [] = [];

  ngOnInit():void{
    this.cargarUsuarios();
  }

  cargarUsuarios(){
    this.servicio.getData().subscribe(data=>{
      this.data = data;
      console.log("usuarios cargados", this.data);
    })
  }

}
