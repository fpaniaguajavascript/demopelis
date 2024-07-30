import { Injectable } from '@angular/core';
import { Ipelicula } from '../interfaces/ipelicula';

@Injectable({
  providedIn: 'root'
})
export class GestorpeliculasService {
  private static LS_KEY = "peliculas";
  public peliculas: Ipelicula[] = [];
  constructor() {
    this.load();
  }
  public add(nuevaPelicula: Ipelicula): void {
    this.peliculas.push(nuevaPelicula);
    this.save();
  }
  private load() {
    const data = localStorage.getItem(GestorpeliculasService.LS_KEY);
    if (data != null) {
      this.peliculas = JSON.parse(data);
    }
  }
  private save() {
    const data = JSON.stringify(this.peliculas);
    localStorage.setItem(GestorpeliculasService.LS_KEY, data);
  }
}
