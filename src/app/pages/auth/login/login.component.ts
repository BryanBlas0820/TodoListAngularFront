import { Component, inject } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // Inyecciones
  private readonly _service = inject(AuthService);
  private readonly _spinner = inject(NgxSpinnerService);


  //FormControl
  frmCorreo = new FormControl();
  frmPassword = new FormControl();



  async fnLogin() {

    if(this.frmCorreo.value == null || this.frmPassword.value == null) {
      Swal.fire({
        icon: 'warning',
        title: 'Atención',
        text: 'Debe completar el formulario'
      })
      this.frmCorreo.markAsTouched();
      this.frmPassword.markAsTouched();
      return;
    }

    this._spinner.show();
    try {

      const sCorreo = this.frmCorreo.value;
      const sPassword = this.frmPassword.value;

      const { response, success, errors } = await firstValueFrom(this._service.getValidarLogeo(sCorreo, sPassword));

      if(success) {
        const { nRetorno, sRetorno } = response.data;

        if(nRetorno > 0 ) {

        }else {
          Swal.fire({
            icon: 'warning',
            title: 'Atención',
            text: sRetorno
          })
          return;
        }
      }

    }catch(er) {
      throw er;
    }finally {
      this._spinner.hide();
    }
  }

}
