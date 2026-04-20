import { Component, inject } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from '../../../../../../shared/services/local-storage.service';
import { firstValueFrom } from 'rxjs';
import { E_ListarTareas } from '../../models/tarea.interface';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss'
})
export class TareaComponent {
  // Inyecciones
  private readonly _service = inject(TareaService);
  private readonly _spinner = inject(NgxSpinnerService);
  private readonly _localStorage = inject(LocalStorageService);

  // Listas
  lTareas: E_ListarTareas[] = [];

  //#region Configuracion

  async ngOnInit() {
    this._spinner.show();

    await this.configurarComponente();

    this._spinner.hide();
  }

  async configurarComponente() {
    await this.obtenerTareas();
  }

  //#endregion

  //#region Obtener

  async obtenerTareas() {
    try {
      const nIdUsuario = this._localStorage.nIdUsuario;
      const { response, success, errors } = await firstValueFrom(this._service.getListarTareas(nIdUsuario!));

      if(success) {
        this.lTareas = response.data;
      }

    }catch(er) {
      throw er;
    }
  }

  //#endregion

}
