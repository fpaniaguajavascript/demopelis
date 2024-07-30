import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GestorpeliculasService } from '../../services/gestorpeliculas.service';
import { Ipelicula } from '../../interfaces/ipelicula';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public titulo: string = "";
  constructor(private servicio: GestorpeliculasService) {
    //Está vacío a propósito
  }
  crear() {
    const pelicula: Ipelicula = {
      titulo: this.titulo,
    }
    this.servicio.add(pelicula);
    this.titulo = "";
  }

}
