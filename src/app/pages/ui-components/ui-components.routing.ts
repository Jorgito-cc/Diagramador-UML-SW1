import { Routes } from '@angular/router';

import {  DiagramComponent} from './diagram/diagram.component'; // Ajusta la ruta según sea necesario// Ajusta la ruta según sea necesario

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'aulas',  // Nueva ruta para AulaComponent
        component: DiagramComponent,
      }



    ],
  },
];
