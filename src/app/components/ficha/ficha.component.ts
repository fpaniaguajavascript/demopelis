import { Component, Input } from '@angular/core';
import { Ipelicula } from '../../interfaces/ipelicula';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {
  @Input() pelicula: Ipelicula | undefined;
}
