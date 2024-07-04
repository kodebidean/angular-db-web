import { Component } from '@angular/core';
import { CreadorComponent } from '../creador/creador.component';
import { NavegadorComponent } from '../navegador/navegador.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CreadorComponent, NavegadorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
