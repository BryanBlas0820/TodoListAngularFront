import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  get nIdUsuario(): number | null {
    const value = localStorage.getItem('nIdUsuario');
    return value ? Number(value) : null;
  }

  set nIdUsuario(value: number) {
    localStorage.setItem('nIdUsuario', value.toString());
  }

  removeNIdUsuario() {
    localStorage.removeItem('nIdUsuario');
  }

}
