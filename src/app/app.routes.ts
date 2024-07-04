import { Routes } from '@angular/router';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'personaje', component:PersonajesComponent}
];
