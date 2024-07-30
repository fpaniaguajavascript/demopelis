import { Injectable } from '@angular/core';
import { Ipelicula } from '../interfaces/ipelicula';

@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  public peliculas: Ipelicula[] = [];
  constructor() { }
  public add(nuevaPelicula: Ipelicula): void {
    this.peliculas.push(nuevaPelicula);
  }
}
