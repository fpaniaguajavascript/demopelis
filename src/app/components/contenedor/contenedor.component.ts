import { Component } from '@angular/core';
import { FichaComponent } from "../ficha/ficha.component";
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [FichaComponent, CommonModule],
  templateUrl: './contenedor.component.html',
  styleUrl: './contenedor.component.css'
})
export class ContenedorComponent {
  constructor(public servicio: GestorpeliculasService) {

  }
}
