import { Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./usuarios/usuarios.routes').then(m => m.USUARIO_ROUTES)
    },

];
