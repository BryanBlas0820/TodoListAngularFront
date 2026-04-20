export interface E_ListarTareas {
  nIdTarea:           number;
  sTitulo:            string;
  sDescripcion:       string;
  bEstado:            boolean;
  dFechaLimite:       Date;
  dFechaRegistro:     Date;
}

export interface E_InsertarTareaData {
  sTitulo:          string;
  sDescripcion:     string;
  dFechaLimite:     Date;
  nIdUsuario:       number;
}

export interface E_ActualizarTareaData {
  nIdTarea:         number;
  sTitulo:          string;
  bEstado:          boolean;
  sDescripcion:     string;
  dFechaLimite:     Date;
  nIdUsuario:       number;
}


